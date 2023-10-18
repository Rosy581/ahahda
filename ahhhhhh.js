/*
Things to save
Level
Money
Stats 
Name
game states
area
*/
var lvl = "21";
var moni = 125;
var str;
var hp;
var mgc;
var ris;
var name;
var gs;
var loc;
//ahhhhhh
function asciiIfi(asc) {
    if (typeof asc === "number") {
        asc = asc.toString();
    }
    var leng = asc.length;
    var final = "";

    for (let i = 0; i < leng; i++) {
        console.log(asc.charCodeAt(i));
        final += asc.charCodeAt(i);
    }
    return final;
}
function load(saveString) {
    const Load1 = saveString.split("-")
    console.log(String.fromCharCode(Load1[0]))
}
function save() {
    var saveLVL = asciiIfi(lvl);
    var saveMon = asciiIfi(moni);
    let saveString = saveLVL + "-" + saveMon + "-";
}

save()
