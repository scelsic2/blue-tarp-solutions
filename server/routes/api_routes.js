const router = require('express').Router();

// POST - CONTACT FORM

router.post('/contact', async (req, res) => {
    try{
        console.log('---req.body---')
        console.log(req.body) 
    }
    catch (err) {
        res.status(500).send({ error: err })
    }
})

module.exports = router