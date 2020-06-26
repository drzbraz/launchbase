const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get('/', function (req, res) {
  const about = {
    avatar_url:
      'https://avatars1.githubusercontent.com/u/29317790?s=460&u=7ead8fb31f383bf39620f4468b7a29982a16dd2e&v=4',
    name: 'Daniel Braz',
    role: 'Software Developer',
    description:
      'Programador full-stack iniciante trabalhando atualmente na Mundiale. Conheça o meu <a href="https://github.com/drzbraz" target="_blank">GitHub</a>.',
    links: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/drzbraz/' },
      { name: 'Instagram', url: 'https://www.instagram.com/drzbraz/' },
    ],
  }

  return res.render('about', { about })
})

server.get('/projetos', function (req, res) {
  return res.render('projetos', { items: videos })
})

server.listen(5000, function () {
  console.log('server is running')
})
