export enum CODE_LANG {
  plaintext = 'plaintext',
  bash = 'bash',
  yaml = 'yaml',
  dockerfile = 'dockerfile',
  typescript = 'typescript',
  python = 'python',
  scss = 'scss'
}

export const projectCodeEventsManager = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/events-manager.git
cd events-manager/
docker compose build
docker compose up`
  }
]

export const projectCodeJobBoard = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/job-board.git
cd job-board/
docker compose build
docker compose up`
  }
]

export const projectCodeDevelopmentForum = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/development-forum.git
cd development-forum/
pip install virtualenv
virtualenv venv
source venv/bin/activate
`
  },
  {
    lang: CODE_LANG.bash,
    code: `pip install -r requirements.txt
cd app/
python manage.py migrate
`
  },
  {
    lang: CODE_LANG.bash,
    code: `python manage.py runserver`
  },
  {
    lang: CODE_LANG.bash,
    code: `make initial-data`
  },
  {
    lang: CODE_LANG.bash,
    code: `python manage.py initialize_data`
  }
]

export const projectCodeMonitoringSystem = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/monitoring-system.git
cd monitoring-system/
make build
make run`
  }
]

export const projectCodeRecommendSystem = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/recommendations-system.git
cd recommendations-system/
make build
make run`
  },
  {
    lang: CODE_LANG.bash,
    code: `docker compose build
docker compose up`
  }
]

export const blogCodeGitLabCiCdPipeline = [
  {
    lang: CODE_LANG.yaml,
    code: `stages:
  - test
  - build
  - deploy`
  },
  {
    lang: CODE_LANG.yaml,
    code: `test-with-linters:
  stage: test
  image: docker:27.0
  services:
    - docker:27-dind
  before_script:
    - apk update && apk add make
    - make build
  script:
    - make check
    - make test`
  },
  {
    lang: CODE_LANG.yaml,
    code: `variables:
  IMAGES_REPO: $REGISTRY_USER/$PROJECT

build:
  stage: build
  image: docker:27.0
  services:
    - docker:27-dind
  before_script:
    - docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD
  script:
    - docker build -t $IMAGES_REPO:backend backend
    - docker build -t $IMAGES_REPO:frontend frontend
    - docker push $IMAGES_REPO:backend
    - docker push $IMAGES_REPO:frontend
  after_script:
    - docker logout`
  },
  {
    lang: CODE_LANG.yaml,
    code: `deploy:
  stage: deploy
  before_script:
    - chmod 400 $SSH_KEY
  script:
    - ssh -o StrictHostKeyChecking=no -i $SSH_KEY $SSH_USER@$SSH_HOST -p $SSH_PORT "
      cd $PROJECT/ &&
      docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD &&
      make down env=prod &&
      docker images -q $IMAGES_REPO | xargs -r docker rmi &&
      make run env=prod"`
  },
  {
    lang: CODE_LANG.yaml,
    code: `stages:
  - test
  - build
  - deploy

variables:
  IMAGES_REPO: $REGISTRY_USER/$PROJECT

test-with-linters:
  stage: test
  image: docker:27.0
  services:
    - docker:27-dind
  before_script:
    - apk update && apk add make
    - make build
  script:
    - make check
    - make test

build:
  stage: build
  image: docker:27.0
  services:
    - docker:27-dind
  before_script:
    - docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD
  script:
    - docker build -t $IMAGES_REPO:backend backend
    - docker build -t $IMAGES_REPO:frontend frontend
    - docker push $IMAGES_REPO:backend
    - docker push $IMAGES_REPO:frontend
  after_script:
    - docker logout

deploy:
  stage: deploy
  before_script:
    - chmod 400 $SSH_KEY
  script:
    - ssh -o StrictHostKeyChecking=no -i $SSH_KEY $SSH_USER@$SSH_HOST -p $SSH_PORT "
      cd $PROJECT/ &&
      docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD &&
      make down env=prod &&
      docker images -q $IMAGES_REPO | xargs -r docker rmi &&
      make run env=prod"`
  }
]

export const blogCodeDjangoReactChat = [
  {
    lang: CODE_LANG.bash,
    code: `django-admin startproject backend`
  },
  {
    lang: CODE_LANG.bash,
    code: `npm create vite@latest frontend -- --template react-ts`
  },
  {
    lang: CODE_LANG.typescript,
    code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],

  server: {
    host: true,
    port: 3000
  },
})`
  },
  {
    lang: CODE_LANG.dockerfile,
    code: `FROM python:3.10.4-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./`
  },
  {
    lang: CODE_LANG.plaintext,
    code: `asgiref==3.5.2
black==23.3.0
channels==4.0.0
channels-redis==4.0.0
daphne==4.0.0
Django==4.0.6
django-stubs==4.2.1
flake8==6.0.0
isort==5.10.1
mypy==1.4.1
sqlparse==0.4.3`
  },
  {
    lang: CODE_LANG.dockerfile,
    code: `FROM node:20.3.1-alpine

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 3000

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]`
  },
  {
    lang: CODE_LANG.yaml,
    code: `version: '3.8'

services:
  web:
    build:
      context: backend
      dockerfile: Dockerfile
    command: sh -c "python manage.py migrate &&
                    python manage.py runserver 0.0.0.0:8000"
    volumes:
      - ./backend:/app
    ports:
      - "8000:8000"
    depends_on:
      redis:
        condition: service_started

  frontend:
    build:
      context: frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules

  redis:
    image: redis:7.0.2-alpine
    ports:
      - "6379:6379"`
  },
  {
    lang: CODE_LANG.python,
    code: `import os

from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        # Just HTTP for now. (We will add other protocols later.)
    }
)`
  },
  {
    lang: CODE_LANG.python,
    code: `# backend/settings.py
INSTALLED_APPS = [
  "daphne",
  "channels",
  "django.contrib.admin",
  "django.contrib.auth",
  "django.contrib.contenttypes",
  "django.contrib.sessions",
  "django.contrib.messages",
  "django.contrib.staticfiles",
]`
  },
  {
    lang: CODE_LANG.python,
    code: `# backend/settings.py
ASGI_APPLICATION = "backend.asgi.application"`
  },
  {
    lang: CODE_LANG.python,
    code: `CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [
                ("redis", 6379),
            ]
        },
    },
}`
  },
  {
    lang: CODE_LANG.bash,
    code: `python manage.py startapp chat`
  },
  {
    lang: CODE_LANG.python,
    code: `INSTALLED_APPS = [
    "daphne",
    "channels",
    ...
    "chat",
]`
  },
  {
    lang: CODE_LANG.python,
    code: `from channels.generic.websocket import AsyncJsonWebsocketConsumer


class Commands:
    JOIN = "join"
    LEAVE = "leave"
    MESSAGE = "message"


class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self) -> None:
        self.group_name = "chat"
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code: int) -> None:
        await self.channel_layer.group_discard(self.group_name, self.channel_name)
        await super().disconnect(close_code)

    async def receive_json(self, content: dict, **kwargs) -> None:
        command = content["command"]
        user = content["user"]
        data = {"type": "websocket_message", "user": user}
        if command == Commands.JOIN:
            data.update({"command": Commands.JOIN, "message": f"{user} has joined"})
        elif command == Commands.LEAVE:
            data.update({"command": Commands.LEAVE, "message": f"{user} has left"})
        else:
            data.update({"command": Commands.MESSAGE, "message": content["message"]})
        await self.channel_layer.group_send(self.group_name, data)

    async def websocket_message(self, event: dict) -> None:
        payload = {
            "command": event["command"],
            "user": event["user"],
            "message": event["message"],
        }
        await self.send_json(payload)`
  },
  {
    lang: CODE_LANG.python,
    code: `from django.urls import path

from .consumers import ChatConsumer

websocket_urlpatterns = [
    path("ws/chat/", ChatConsumer.as_asgi()),
]`
  },
  {
    lang: CODE_LANG.python,
    code: `import os

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()
# Initialize Django ASGI application early to ensure the AppRegistry
# is populated before importing code that may import ORM models.

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

import chat.routing

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": URLRouter(chat.routing.websocket_urlpatterns),
    }
)`
  },
  { lang: CODE_LANG.bash, code: `npm add -D sass` },
  {
    lang: CODE_LANG.scss,
    code: `// App.scss
.app {
  margin: 0;
  width: 100%;
}`
  },
  {
    lang: CODE_LANG.scss,
    code: `// index.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #e7e7e7;
  background: #121213;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

a {
  all: unset;
  cursor: pointer;
}

button {
  cursor: pointer;
}`
  },
  { lang: CODE_LANG.bash, code: `npm i react-router-dom` },
  {
    lang: CODE_LANG.typescript,
    code: `import './App.scss'

function App() {
  return <div className="app">Django & React Chat</div>
}

export default App`
  },
  {
    lang: CODE_LANG.typescript,
    code: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)`
  },
  {
    lang: CODE_LANG.bash,
    code: `npm i classnames`
  },
  {
    lang: CODE_LANG.bash,
    code: `npm i react-use-websocket`
  },
  {
    lang: CODE_LANG.typescript,
    code: `export enum ECommands {
  Join = 'join',
  Leave = 'leave',
  Message = 'message'
}

export interface IMessage {
  command: string
  user: string
  message: string
}`
  },
  {
    lange: CODE_LANG.typescript,
    code: `import './style.scss'
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import SendIcon from 'assets/icons/send-icon.svg'
import { IMessage, ECommands } from 'models/message'

const Chat = () => {
  const [usernameProvided, setUsernameProvided] = useState(false)
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (usernameProvided) {
      const messageData = { message: \`\${username} has joined\`, user: username, command: 'join' }
      setMessages((prevState) => [...prevState, messageData])
    }
  }, [usernameProvided])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const handleUsernameSubmission = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setUsernameProvided(true)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const message = newMessage.trim()
    if (message) {
      const messageData = { message: message, user: username, command: 'message' }
      setMessages((prevState) => [...prevState, messageData])
      setNewMessage('')
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event as FormEvent)
    }
  }

  return (
    <main className="chat">
      <div className="chat-items">
        <div className="chat__header">Django & React Chat</div>
        <div ref={chatRef} className="chat__messages">
          {messages.map((message, index) => (
            <div
              className={classNames('chat__message', {
                centered: message.command !== ECommands.Message,
                blue: message.user === username && message.command === ECommands.Message,
                gray: message.user !== username && message.command === ECommands.Message
              })}
              key={index}>
              {message.command === ECommands.Message ? (
                <>
                  <p className="message__user">{message.user}</p>
                  <p className="message__content">{message.message}</p>
                </>
              ) : (
                <p className="message__notification">{message.message}</p>
              )}
            </div>
          ))}
        </div>
        <form className="chat__form" onSubmit={handleSubmit}>
          <>
            {usernameProvided ? (
              <>
                <textarea
                  placeholder="Send a message"
                  className="chat__input"
                  autoFocus={true}
                  autoComplete="off"
                  value={newMessage}
                  onKeyDown={handleKeyDown}
                  onChange={(event) => setNewMessage(event.target.value)}
                />
                <img src={SendIcon} className="chat__send" alt="send" onClick={handleSubmit} />
              </>
            ) : (
              <input
                type="text"
                placeholder="Provide your username and press enter"
                className="chat__input chat__input--username"
                maxLength={10}
                autoFocus={true}
                onKeyDown={handleUsernameSubmission}
                onChange={(event) => setUsername(event.target.value)}
              />
            )}
          </>
        </form>
      </div>
    </main>
  )
}

export default Chat`
  },
  {
    lang: CODE_LANG.scss,
    code: `$chat-padding: 2em;
$chat-form-height: 4em;

.chat {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $chat-padding;

  .chat-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - $chat-padding * 2);
    max-width: 50rem;
    border-radius: 1.75em;

    .chat__header {
      padding: 1rem;
      text-align: center;
      font-size: clamp(12px, 3vw, 24px);
      background: #161b22;
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
    }

    .chat__messages {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 4%;
      max-height: calc(100vh - $chat-form-height * 3);
      border: 1px solid rgba(148, 163, 184, 0.1);

      overflow-y: auto;
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: #161b22 transparent;

      .chat__message {
        display: flex;
        flex-direction: column;
        font-size: clamp(12px, 3vw, 24px);

        &.blue {
          align-items: flex-end;

          .message__content {
            background-color: #0099FF;
          }
        }

        &.gray {
          align-items: flex-start;

          .message__content {
            background-color: #303030;
          }
        }

        &.blue,
        &.gray {
          .message__content {
            text-align: left;
            max-width: 15em;
            padding: 0.75em;
            border-radius: 1em;
            overflow-wrap: break-word;
          }
        }

        &.centered {
          justify-content: center;
          align-items: center;

          .message__notification {
            border-radius: 1em;
            padding: 0.75em 3em;
            border: 1px solid rgba(148, 163, 184, 0.2);
          }
        }

        .message__user {
          margin: 0 0.5rem;
          font-size: clamp(8px, 3vw, 20px);
          color: #94a3b8;
        }
      }
    }

    .chat__form {
      display: flex;
      width: 100%;
      height: clamp(3em, 8vw, 4em);
      max-height: $chat-form-height;

      background: #161b22;
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);

      .chat__input {
        width: 100%;
        padding: 1rem;
        font: inherit;
        color: #94a3b8;
        background: inherit;
        border-radius: inherit;
        border: none;
        outline: none;
        resize: none;
        font-size: clamp(12px, 3vw, 24px);

        &::placeholder {
          color: inherit;
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .chat__input--username {
        text-align: center;
      }

      .chat__send {
        margin: 0.75rem;
        width: clamp(22px, 4vw, 36px);
        cursor: pointer;

        transition: transform ease-in-out 0.05s;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
}`
  },
  {
    lang: CODE_LANG.typescript,
    code: `import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Chat from 'components/Chat'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App`
  },
  {
    lang: CODE_LANG.typescript,
    code: `const url = window.location
const socketProtocol = url.protocol === 'https:' ? 'wss:' : 'ws:'

export const SOCKET_URL =
  url.port !== ''
    ? \`\${socketProtocol}//\${url.hostname}:8000/ws\`
    : \`\${socketProtocol}//$\{url.hostname}/ws\`

export const WEBSOCKETS = {
  chat: \`\${SOCKET_URL}/chat/\`
}`
  },
  {
    lang: CODE_LANG.typescript,
    code: `import { SendJsonMessage } from 'react-use-websocket/dist/lib/types'
import { IMessage } from 'models/message'
import { useEffect } from 'react'

const useLeaveSocket = (sendJsonMessage: SendJsonMessage, message: IMessage, dep: boolean) => {
  const onUnload = () => {
    if (message.user) {
      sendJsonMessage(message)
    }
  }

  useEffect(() => {
    if (dep) {
      window.addEventListener('beforeunload', onUnload)

      return () => {
        window.removeEventListener('beforeunload', onUnload)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep])
}

export default useLeaveSocket`
  },
  {
    lang: CODE_LANG.typescript,
    code: `...

import useWebSocket from 'react-use-websocket'
import { WEBSOCKETS } from 'utils/consts'
import useLeaveSocket from 'hooks/useLeaveSocket'

const Chat = () => {

...

  const { sendJsonMessage } = useWebSocket(WEBSOCKETS.chat, {
    onMessage: (event) => {
      const data = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, data])
    }
  })

  useLeaveSocket(
    sendJsonMessage,
    {
      command: ECommands.Leave,
      user: username,
      message: \`\${username} has left\`
    },
    usernameProvided
  )

  useEffect(() => {
    if (usernameProvided) {
      sendJsonMessage({
        command: ECommands.Join,
        user: username,
        message: \`\${username} has joined\`
      })
    }
  }, [usernameProvided])

...

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const message = newMessage.trim()
    if (message) {
      sendJsonMessage({ command: ECommands.Message, user: username, message: message })
      setNewMessage('')
    }
  }

...`
  }
]
