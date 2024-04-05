export enum CODE_LANG {
  plaintext = 'plaintext',
  bash = 'bash',
  yaml = 'yaml',
  dockerfile = 'dockerfile',
  typescript = 'typescript'
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
