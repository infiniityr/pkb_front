import marked from 'marked'
import hljs from 'highlight.js'

export default {
  install (Vue) {
    marked.setOptions({
      highlight: (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
        return hljs.highlight(validLanguage, code).value
      },
      sanitize: true,
      gfm: true,
      smartLists: true,
      smartypants: true
    })
    Vue.prototype.$marked = marked
  }
}
