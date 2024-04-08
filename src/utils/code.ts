export enum CODE_LANG {
  plaintext = 'plaintext',
  bash = 'bash',
  yaml = 'yaml',
  dockerfile = 'dockerfile',
  typescript = 'typescript',
  python = 'python'
}

export const djangoReactChatCode = [
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
django-cors-headers==4.1.0
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
            data["message"] = f"{user} has just joined"
        elif command == Commands.LEAVE:
            data["message"] = f"{user} has left"
        else:
            data["message"] = content["message"]
        await self.channel_layer.group_send(self.group_name, data)

    async def websocket_message(self, event: dict) -> None:
        payload = {"user": event["user"], "message": event["message"]}
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
  }
]

export const jobBoard = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/job-board.git
cd job-board/
docker compose build
docker compose up`
  }
]

export const developmentForum = [
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

export const monitoringSystem = [
  {
    lang: CODE_LANG.bash,
    code: `git clone https://github.com/kamilkaminski01/monitoring-system.git
cd monitoring-system/
make build
make run`
  }
]

export const recommendationsSystem = [
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
