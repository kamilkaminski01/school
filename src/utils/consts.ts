import MonitoringSystemThumbnail from '@/assets/images/1.svg'
import DevelopmentForumThumbnail from '@/assets/images/2.svg'
import JobBoardThumbnail from '@/assets/images/3.svg'
import RecommendationsSystemThumbnail from '@/assets/images/4.svg'
import { jobBoard } from './code'

export const BLOGS = {
  djangoReactChat: {
    link: 'django-react-chat',
    title: 'Chat in Django & React',
    date: 'Apr 26, 2024',
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
    ],
    tutorial: {
      header: {
        date: 'Apr 26, 2024',
        title: 'Chat in Django & React',
        demo: ''
      },
      content: [
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  about: {
    link: 'about',
    title: 'About me - Kamil Kamiński',
    date: 'Mar 28, 2024',
    sections: [],
    tutorial: {
      header: {
        date: 'Mar 28, 2024',
        title: "Hi 👋, I'm Kamil",
        demo: ''
      },
      content: [
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  }
}

export const PROJECTS = {
  jobBoard: {
    feature: true,
    date: 'Oct 7, 2023',
    link: 'job-board',
    thumbnail: JobBoardThumbnail,
    title: 'IT Recruitment Platform',
    desc: 'Search for candidates and apply for jobs',
    tutorial: {
      header: {
        date: 'Oct 7, 2023',
        title: 'Job Board',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/job-board/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Hello! 📝' },
        {
          type: 'paragraph',
          text:
            'Job Board is a web application designed to streamline the job search process for both job seekers and ' +
            'employers. This project aims to provide a user-friendly platform where job seekers can search for relevant ' +
            'job listings and apply for positions, while employers can efficiently post job openings and manage applications.'
        },
        { type: 'title', text: 'Key Features' },
        {
          type: 'list',
          items: [
            '<strong>OAuth (Open Authentication)</strong> is an open standard for access delegation'
          ]
        },
        { type: 'title', text: 'Project Setup' },
        {
          type: 'paragraph',
          text: 'Docker Compose'
        },
        {
          type: 'code',
          lang: jobBoard[0].lang,
          text: jobBoard[0].code
        },
        { type: 'title', text: 'Links' },
        { type: 'icons', icon: '', text: 'GitHub' }
      ]
    }
  },
  developmentForum: {
    feature: true,
    date: 'Mar 9, 2023',
    link: 'development-forum',
    thumbnail: DevelopmentForumThumbnail,
    title: 'Forum about development topics',
    desc: 'Create topics, rooms and help others',
    tutorial: {
      header: {
        date: 'Mar 9, 2023',
        title: 'Development Forum',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/development-forum/main/app/static/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Welcome!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  },
  monitoringSystem: {
    feature: true,
    date: 'Nov 27, 2022',
    link: 'monitoring-system',
    thumbnail: MonitoringSystemThumbnail,
    title: 'Web apps with real-time monitoring',
    desc: 'Whiteboard, Tic Tac Toe, Bingo and more',
    tutorial: {
      header: {
        date: 'Nov 27, 2022',
        title: 'Monitoring System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/monitoring-system/master/frontend/src/assets/images/demo.png'
      },
      content: [
        { type: 'title', text: 'Welcome back!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  },
  recommendationsSystem: {
    feature: false,
    date: 'Oct 13, 2022',
    link: 'recommendations-system',
    thumbnail: RecommendationsSystemThumbnail,
    title: 'Campaign platform for recruitment',
    desc: 'Recommend potential candidates for prizes',
    tutorial: {
      header: {
        date: 'Oct 13, 2022',
        title: 'Recommendations System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/recommendations-system/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Hi there' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  }
}
