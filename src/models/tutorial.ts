export enum CONTENT_TYPE {
  title = 'title',
  subtitle = 'subtitle',
  paragraph = 'paragraph',
  img = 'img',
  code = 'code',
  tree = 'tree',
  unorderedList = 'unorderedList',
  orderedList = 'orderedList',
  quote = 'quote',
  note = 'note',
  warning = 'warning',
  icons = 'icons'
}

export interface ITutorial {
  header: {
    date: string
    readTime: string
    title: string
    demo: string
  }
  content: {
    type: CONTENT_TYPE
    text: string
    img: string
    lang: string
    items: string[]
    icons: { icon: string; text: string; link: string }[]
  }[]
}
