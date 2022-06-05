//載入express並建構應用伺服器
const express = require('express')
const app = express() //用app來代表呼叫express()，呼叫express()會啟動Express應用程式伺服器
const port = 3000
//載入樣板引擎
const { engine } = require('express-handlebars')

app.engine('.hbs', engine({ extname: '.hbs',defaultLayour: 'main' }))
app.set('view engine', '.hbs')
app.set('views', './views')


app.get('/',(req,res)=>{
    res.render('index')
})

//設定伺服器監聽port3000，應用程式會處理任何從port3000進來的瀏覽器request
app.listen(port, ()=>{
    console.log('App is running on http://localhost:3000')
})