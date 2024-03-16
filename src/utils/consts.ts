export const blogs = {
  djangoReactChat: {
    link: 'django-react-chat',
    title: 'Chat in Django & React',
    date: 'Thu Jan 26 2024',
    sections: [
      {
        title: 'Introduction',
        desc: 'Get started with an overview of the chat tutorial and its objectives.'
      },
      {
        title: 'Environment',
        desc: 'Set up a development environment for building the chat application.'
      },
      {
        title: 'Database and Redis',
        desc: 'Configure the database and integrate Redis for real-time messages.'
      },
      {
        title: 'Backend with Django',
        desc: 'Code up the backend side of the chat application using Django.'
      },
      {
        title: 'Consumers',
        desc: 'Concept of consumers in Django Channels and WebSockets.'
      },
      {
        title: 'Frontend with React',
        desc: 'Frontend interface enabling users to interact seamlessly.'
      }
    ]
  },
  about: {
    link: 'about',
    sections: [],
    title: 'About me - Kamil Kamiński',
    date: 'Mon Jan 28 2024'
  }
}

export const projects = {
  jobBoard: {
    feature: true,
    date: 'Oct 7, 2023',
    link: 'job-board',
    thumbnail: '/src/assets/images/',
    title: 'IT Recruitment Platform',
    desc: 'Search for candidates and apply for jobs'
  },
  developmentForum: {
    feature: true,
    date: 'Mar 9, 2023',
    link: 'development-forum',
    thumbnail: '/src/assets/images/',
    title: 'Forum about development topics',
    desc: 'Create topics, rooms and help others'
  },
  monitoringSystem: {
    feature: true,
    date: 'Nov 27, 2022',
    link: 'monitoring-system',
    thumbnail: '/src/assets/images/',
    title: 'Web apps with real-time monitoring',
    desc: 'Whiteboard, Tic Tac Toe, Bingo and more'
  },
  recommendationsSystem: {
    feature: false,
    date: 'Oct 13, 2022',
    link: 'recommendations-system',
    thumbnail: '/src/assets/images/',
    title: 'Campaign platform for recruitment',
    desc: 'Recommend potential candidates for prizes'
  }
}
