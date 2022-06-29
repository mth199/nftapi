// config inicial
require('dotenv').config()
const express = require ('express')
const app = express()




// forma de ler JSON / middlewares
app.use(
express.urlencoded({
    extended: true,
    }),
)

app.use(express.json())

//rotas da API
const nftRoutes = require('./routes/nftRoutes')

app.use('/nft', nftRoutes)

//rotal inicial / endpoint
app.get('/', (req, res) => {
//mostrar req

res.json({message: 'Oi Express!'})
})


// entregar uma porta

app.listen(3000)
