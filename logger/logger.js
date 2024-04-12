class Logger{
    constructor(){
        this.fs = require("node:fs")
    }
    setLog(str){
        fetch(str, { method: "HEAD" }) 
    .then(response => { 
        if (response.ok) { 
            console.log("Output set"); 
        } else { 
            console.log("File does not exist"); 
        } 
    }) 
    .catch(error => { 
        console.log("Logger error =>", error); 
    }); 
    }
    log(inp){
    let a = new Date(Date.now());
    fs.appendFile(`\n${inp} AT ${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes}.new Date(Date.now()).getMilliseconds()`, (er)=>{
             if(er){
                console.error(er)
            } else {
                console.log("logged")
            }
        }
    )};   
}
const test = new Logger()
    .setLog("../test.txt")