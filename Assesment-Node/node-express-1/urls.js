const axios = require("axios")
const fs = require("fs");

function removeHttp(url) {
    url = url.replace(/^https?:\/\//, '');
    if (url.indexOf('/') != -1){
        url = url.substr(0, url.indexOf("/"));
    }
    return url
  }

async function toHTML(URL){
    const resp = await axios.get(URL)
    return resp.data
}

async function writeToFile(fileName,content, url){
    const URL = url
    try{
        fs.writeFile(fileName, await content, err =>{
            if (err) throw err
            console.log(`Wrote to ${fileName}`)
        });
    } catch (e) {
        console.log("Couldnt Download", URL)
    }
}

fs.readFileSync('urls.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    writeToFile(removeHttp(line), toHTML(line), line)
})
