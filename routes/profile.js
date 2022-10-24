const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/profile', auth.verifyToken, async (req, res) => {
  // i will just return a simple data here, here you should return data from the database

  res.send({
    status: 1,
    data: { userName: 'John Doe', userWebsite: 'https://google.com' },
    message: 'Successful',
  })
})

module.exports = router
