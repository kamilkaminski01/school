export interface ITutorial {
  header: {
    date: string
    title: string
    demo: string
  }
  content: {
    type: 'title' | 'subtitle' | 'paragraph' | 'code' | 'list' | 'icons'
    text?: string
    lang?: string
    items?: string[]
    icon?: string
  }[]
}
