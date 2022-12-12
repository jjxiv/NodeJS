const fs = require('fs');

// read f
// fs.readFile('./docs/blog1.txt',(err,data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

//write f
// fs.writeFile('./docs/blog4.txt', "Hello Jericho John!",() => {
//     console.log("file was writen!");
// })

let name = "jericho";

fs.appendFile('./docs/blog4.txt',name, function(err){
    if(err) throw err;
    console.log('Appended to file!!');
})



// created directories




//delete f