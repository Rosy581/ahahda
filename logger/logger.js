class Logger{
    constructor(logg){
        this.fs = require("node:fs")
        let d = new Date(Date.now())
        if(this.fs.existsSync(`${logg} ${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`)){
            this._log = `${logg} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`;
        } else if(logg == undefined){
            this._log;
        }else {
            console.log("File not found...")
            console.log("Creaing file...")
            this.fs.writeFile(`${logg} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`, '', (err)=>{
                if(err){
                    console.error(err)
                }
            });
            this._log = `${logg} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`
        }
    }
    setLog(str){
        let d = new Date(Date.now())
        if(this.fs.existsSync(`${str} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`)){
            this._log = `${str} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`
        } else {
            console.log("File not found...")
            console.log("Creaing file...")
            fs.writeFile(`${str} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`, '', (err)=>{
                if(err){
                    console.error(err)
                }
            });
            this._log = `${str} ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`
        }
    }
    setFile(logg){
        this._log = logg;
    }
    write(fil){
        this.fs.writeFile(this._log, fil), (er)=>{
            console.error(er)
        }
    }
    log(inp){
        let a = new Date(Date.now());
        this.fs.appendFile(this._log,`${inp} --- ${a.getHours()}:${a.getMinutes()}.${a.getMilliseconds()}\n`, (er)=>{
            if(er){
                console.error(er)
            }   
        }
    )};   
}
module.exports = Logger