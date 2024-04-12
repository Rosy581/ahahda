const fs = require("node:fs")

fs.appendFile("test.txt","\nThis is a test! (again)", (er)=>{
    if(er){
        console.error(er)
    } else {
        console.log("done")
    }
})