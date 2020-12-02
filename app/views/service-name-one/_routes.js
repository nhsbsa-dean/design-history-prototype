const express = require('express');
const fs = require('fs');

const router = express.Router();

const directoryPath = './app/views/service-name-one/blogs/';

router.get('/service-blogs', (req, res) => {
    let fileList = [];
    fs.readdir(directoryPath, (err, file) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        file.forEach((file) => {
            fileList.push(file);
        });
        res.render('service-name-one/service-blogs', {fileList});
    });
});



module.exports = router;