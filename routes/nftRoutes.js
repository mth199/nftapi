const router = require('express').Router()
const axios = require ('axios')

async function init(chain) {
return axios.create({baseURL:`https://${chain}.alchemyapi.io/nft/v2/demo/getNFTs/`})

}

async function nftsowner(selectchain, address) {
    const api = await init(selectchain)
    const blocoJson = await api.get(`/?owner=${address}`)
    const response = blocoJson.data.ownedNfts.map((nft) =>{
        return{
            title:nft.title,
            description:nft.description,
            imageUrl:nft.media.map((nftimage) =>{
                return {
                    image:nftimage.gateway,
                }
            }),
        }
    })
    console.log(response)
    return response;
}
    
    //Read - leitura de dados
router.get('/ethereum/:address', async(req,res) =>{
    const {address} = req.params

    try{
        const nfts = await nftsowner('eth-mainnet', address)
    
        res.status(200).json(nfts)
    } catch (error) {
        res.status(500).json({ error : error })
    }
});
router.get('/polygon/:address', async(req,res) =>{
    const {address} = req.params

    try{
        const nfts = await nftsowner('polygon-mainnet.g', address)
    
        res.status(200).json(nfts)
    } catch (error) {
        res.status(500).json({ error : error })
    }
});
router.get('/rinkeby/:address', async(req,res) =>{
    const {address} = req.params

    try{
        const nfts = await nftsowner('eth-rinkeby', address)
    
        res.status(200).json(nfts)
    } catch (error) {
        res.status(500).json({ error : error })
    }
});

module.exports = router