// config inicial
require('dotenv').config()
const express = require ('express')
const app = express()
const cors = require('cors');




// forma de ler JSON / middlewares
app.use(
express.urlencoded({
    extended: true,
    }),
)

app.use(express.json());

app.use((req, res , next ) => {
    res.header("Acess-Control-Allow-Origin","*");
    app.use(cors());
    next();
    
});

//rotas da API
const nftRoutes = require('./routes/nftRoutes')

app.use('/nft', nftRoutes)

//rotal inicial / endpoint
app.get('/', (req, res) => {
//mostrar req

res.json({message: 'Oi Express!'})
})


// entregar uma porta

app.listen(process.env.PORT||3000)
