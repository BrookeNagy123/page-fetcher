const request = require('request');
const fs = require('fs');

const args = process.argv;
const sliced = args.slice(2);
let inputUrl = sliced[0];
let filePath = sliced[1];

request(inputUrl, (error, response, body) => {
  ('error:', error); // Print the error if one occurred
  ('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  ('body:', body); // Print the HTML for the Google homepage.
    let content = body;
    fs.writeFile(filePath, content, err => {
      if(err){
        console.log(err);
      }
      const size = fs.statSync(filePath).size; 
      console.log("Downloaded and saved " + size + " bytes to " + filePath); 
    });
});


