const download = require('downloadjs');
const dl = () =>{
    const name = Document.getElementById("nam")
    const fil = Document.getEleementById("fil")
    download(name,fil,"text/js")
}