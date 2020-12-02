const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const util = require('util');


const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/new', (req, res) => {
    res.render('create-blog/new');
});

// Generate file
router.post('/create-blog', async (req, res) => {
    
    const dateCreated = new Date().toLocaleDateString();
    const blogTitle = req.body.title;
    const fileName = blogTitle.replace(/\s/g , "-");
    const serviceName = req.body.service;
    const serviceNameMatch = serviceName.replace(/\s/g , "-");
    const blogData = {
        description: req.body.description,
        markdown: req.body.markdown
    }
    const pathToDir = `./app/views/${serviceNameMatch}/blogs/${fileName}-${dateCreated}`
    
    
    fs.writeFile(`${pathToDir}`, util.inspect(blogData), (e) => {
        if(e) {
            return console.log(e);
        } else {
            console.log('Blog published');
            res.render('create-blog/saved');
        }
    })
});

// Read file


// Edit file


// Delete File

module.exports = router;