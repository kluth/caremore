import { App } from '@tinyhttp/app'
//import { pug } from '@tinyhttp/pug'
import { jwt } from '@tinyhttp/jwt'

//const app = pug()(new App({
const app = new App({
    noMatchHandler: (req, res) => res.send('Oops... something went wrong.')
})
.use(jwt({ secret: 'secret', algorithm: 'HS256'}))

app.get('/secret', function (req, res) {
    res.send(`Data inside payload: ${req['user']}`)
})

app.get('/', function (req, res) {
    //res.render('../app/views/index.pug')
    res.send('home')
})

app.get('/login', function (req, res) {
    res.send('login')
})

app.listen(3000, () => console.log('Server running on port 3000...'))