/**
 * Vite 插件：将 frontmatter 中的 keywords 追加到 Markdown 正文末尾（隐藏）
 * 使本地搜索（minisearch）能索引到关键词，支持关键词搜索与多语言关键词。
 *
 * 在任意 .md 的 frontmatter 中可写：
 *   keywords: 词1, 词2, 词3
 *   keywords: [词1, 词2, 词3]
 *   keywords_zh: 中文关键词1, 中文关键词2   （当前语言为 zh-CN 时用于 SEO meta）
 *   keywords_en: keyword1, keyword2        （当前语言为 en 时用于 SEO meta）
 * 未写 keywords_zh/keywords_en 时，SEO 使用 keywords。所有 keywords* 都会参与站内搜索索引。
 */
import type { Plugin } from 'vite'

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/

function extractKeywordsFromFrontmatter(fm: string): string[] {
  const keywords: string[] = []
  // keywords: 或 keywords_zh: / keywords_en: 等
  const lines = fm.split(/\r?\n/)
  for (const line of lines) {
    const match = line.match(/^keywords(_[a-z]{2,5})?:\s*(.+)$/i)
    if (!match) continue
    const value = match[2].trim()
    // 支持 "a, b, c" 或 [a, b, c]
    if (value.startsWith('[')) {
      const inner = value.slice(1, -1).replace(/['"]/g, '').split(',').map(s => s.trim()).filter(Boolean)
      keywords.push(...inner)
    } else {
      value.split(',').map(s => s.trim()).filter(Boolean).forEach(k => keywords.push(k))
    }
  }
  return [...new Set(keywords)]
}

export function keywordsSearchPlugin(): Plugin {
  return {
    name: 'vitepress-keywords-search',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const match = code.match(FRONTMATTER_RE)
      if (!match) return null
      const [, frontmatter, content] = match
      const keywords = extractKeywordsFromFrontmatter(frontmatter)
      if (keywords.length === 0) return null
      // 在正文末尾追加隐藏的关键词文本（可见于 DOM），便于本地搜索索引
      const keywordText = keywords.join(', ')
      const suffix = `\n\n<div class="vp-keywords-hidden" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;font-size:0;">${keywordText}</div>\n`
      return code.replace(FRONTMATTER_RE, `---\n${frontmatter}\n---\n${content.trimEnd()}${suffix}`)
    },
  }
}
