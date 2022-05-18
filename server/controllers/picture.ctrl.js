const { response } = require('express');
const axios = require('axios');

let pictureList = [];
let pageCount = 1;


exports.pictureController = {
    loadData () {
        axios.get(`https://picsum.photos/v2/list?page=${pageCount}&limit=100`)
        .then(docs => { 
            pictureList = docs.data
            pageCount += 1
         })
        .catch(err => console.log(`Error getting the data from URL: ${err}`))    
    },

    getPictures(req, res) {
        console.log("befor if");
        let nextFivePic = []
        console.log(pictureList.length)
        if (pictureList.length < 5)
            loadData()
        for(let i = 0; i < 5; i++) {
            nextFivePic.push(pictureList.shift())
        }
        res.json(nextFivePic)
    }, 
};


