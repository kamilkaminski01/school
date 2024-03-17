<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/kamilkaminski01/school/main/public/favicon-512x512.png" width="100" />
</div>
<h1 align="center">school.kamilkaminski.pl</h1>

<p align="center">
  The first version of <a href="https://school.kamilkaminski.pl" target="_blank">school.kamilkaminski.pl</a> built with TypeScript in <a href="https://vuejs.org/" target="_blank">Vue</a> and deployed with <a href="https://vercel.com/" target="_blank">Vercel</a>
</p>

![demo](https://raw.githubusercontent.com/kamilkaminski01/school/main/src/assets/images/demo.png)

## Running from sources

```sh
git clone https://github.com/kamilkaminski01/school.git
cd school/
npm install
npm run dev
```

The site will be running at `http://localhost:5173`

## Code quality standards

### Frontend

All frontend code is formatted and verified by the `prettier`,
`eslint` and `tsc` tools. Pre-commit hooks can be set up with `husky`.
CSS class names are defined according to the
[BEM](http://getbem.com/introduction/) methodology.
