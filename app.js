const experss = require('express')
const bodyparser = require('body-parser')
const app = experss() 
const router = experss.Router()

router.get('/:id', (req, res,next)=>{
    const id = req.params.id
    res.json({ 
        "id": id
    })
})
app.use(router)

app.listen(9000,()=>{
    console.log('new deployment sagoler bacha');
    console.log('server is running in port 9000')})