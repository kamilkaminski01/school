export enum CODE_LANG {
  bash = 'language-bash'
}

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
