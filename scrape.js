var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
 //fs:File System

const WriteStream = fs.createWriteStream('post.csv');
//below ine requests access on htm file on that link 
request('https://loksabha.nic.in/',(error,response,html)=>{
    if(!error && response.statusCode == 200)
    {
        const $ = cheerio.load(html);//defining a jquery element
       $('#ticker2').each((i,el)=>{//ticker2 iss the id 
            const linkTitle = $(el).find('a').text().replace(/(\.|\s\s)+/g,'.\n');
            //using linear regression we are replacing ssplitting the paragraph or links which are bined. 
            console.log(linkTitle);
            //creating csv file
            WriteStream.write(`${linkTitle} \n`);
       })
        console.log('scraping is done');
    }
})
