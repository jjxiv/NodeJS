const fs = require('fs') // fs is a module, stands for filesystem

// reading files
// fs.readFile('./docs/blog12.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString()); //data variable is a buffer, needs toString method to convert to value
// });


// console.log('last line'); // this is executed first than the first because js prioritizes what it can execute

//----------------------------------------------------
// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world!', ()=>{
//     console.log('file was overwritten');
// });

// fs.writeFile('./docs/blog2.txt','hello world!',()=>{
//     console.log('New file is created');
// });

//----------------------------------------------------
// directories
// fs.mkdir('./assets', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('folder created');
// }); // an asynchronous task because takes some time to do
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         } console.log("New folder created");
//     });
// } else {
//     console.log ("A folder with the same name exists!");
// }

//deleting files
// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) =>{
//         if (err) {
//             console.log(err)
//         } console.log('file deleted');
//     });
// } else {
//     console.log ("A folder does not exist!");
// }

if (fs.existsSync('./docs/blog4.txt')){
    fs.unlink('./docs/blog4.txt',(err) =>{
        if (err){
            console.log(err);
        } console.log('file deleted');
    });
} else {
    console.log ("A file does not exist.");
}