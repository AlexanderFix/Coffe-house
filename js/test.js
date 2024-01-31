const fs = require('fs');

arr = fs.readFile('js/products.json', 'utf8',(err,data) => {
   console.log(data);
})

