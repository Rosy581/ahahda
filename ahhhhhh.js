/*
Things to save
Level
Money
Stats
Name
game states
area
*/
var lvl = "1";
    var moni;
    var str;
    var hp;
    var mgc;
    var name;
    var gs;
    var loc;
//ahhhhhh
    function asciiIfi(asc){
        var Temp = asc;
        var leng = (asc.length);
}
function load(saveString){
    const Load1 = saveString.split("-")
    console.log(String.fromCharCode(Load1[0]))
    }  

    function save(){
        let saveString;
        var saveLVL= String.fromCharCode(lvl)
        console.log(saveLVL)
        }
    load('49-49')
    save()