export interface ITutorial {
  header: {
    date: string
    read: string
    title: string
    demo: string
  }
  content: {
    type: 'title' | 'subtitle' | 'paragraph' | 'code' | 'list' | 'warning' | 'icons'
    text?: string
    lang?: string
    items?: string[]
    icons?: { icon: string; text: string; link: string }[]
  }[]
}
