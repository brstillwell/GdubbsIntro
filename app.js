// These are the created variables
const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = express.Router();

// path the index
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

// tells express to use the router
app.use('/', router);

// tells app to listen on port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})