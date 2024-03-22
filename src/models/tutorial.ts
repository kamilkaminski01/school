export interface ITutorial {
  header: {
    date: string
    title: string
    demo: string
  }
  content: {
    type: 'title' | 'paragraph' | 'code'
    text: string
  }[]
}
