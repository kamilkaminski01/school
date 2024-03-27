export const jobBoard = [
  {
    lang: 'language-bash',
    code: `git clone https://github.com/kamilkaminski01/job-board.git
cd job-board/
docker compose build
docker compose up`
  }
]

export const recommendationsSystem = [
  {
    lang: 'language-bash',
    code: `git clone https://github.com/kamilkaminski01/recommendations-system.git
cd recommendations-system/
make build
make run`
  },
  {
    lang: 'language-bash',
    code: `docker compose build
docker compose up`
  }
]
