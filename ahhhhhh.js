var lvl = "21"; // level uwu
var moni = 125; // dabloons
var str; // strength for melee weapons
var hp; // current health
var mh; // max health
var mgc; // magic for like magic, you know
var ris = []; // resistance?
var named = "GREG"; // can't change to name, JS spaghetti
var gs; // game state
var loc; // location
function removecoma(rem) {
    remo = rem.split(",");
    remov = remo.join("");
    return remov;
}

function varSav(sava) {
    const saveVar = [];
    let a = parseInt(sava)
    var vared = sava
    if (typeof vared === "string" && isNaN(a)) {
        vared = sava.toUpperCase();
        let len = vared.length;
        for (let i = 0; i < len; i++) {
            saveVar.push(vared.charCodeAt(i))
        }
        var varSavi = saveVar.join('')
        return varSavi
    } else if (typeof sava === "number") {
        vared = sava.toString();
        let len = vared.length;
        for (let i = 0; i < len; i++) {
            saveVar.push(vared.charCodeAt(i))
        }
        var varSavi = saveVar.join('')
        return varSavi
    } else {
        function kys(num) {
            for (let i = 0; i < num; i++) {
                console.log("kys")
            }
        }
    }

}

/*
1.Make second function to do each segment
2. assign each segment to its corrisponding varible 
do this by using object things
ex.
function isLetter(){return test = "letter"}
function isNumber(){return test = "number"}
var test = {
    "1":isNumber(),
    "a":isLetter(),
}
test["1"]
returns number
test["a"]
returns letter
use this to take the value of x to assign varibles
for their array pos also can

might want to scramble the saveString to make it harder to crack.
*/
//funcy town
function pushLVL(nLVL){
    lvl = nLVL
}
function pushVar(varTBP){
    var type = prompt("Input var to be pushed")
    var vats = {
        "lvl":pushLVL(varTBP)
    }

}
function load(saveString) {
    const fin = []
    const Load1 = saveString.split("-");
    const Load2 = Load1.length;
    for (let x = 0; x < Load2; x++) {
        const Load3 = Load1[x].toString();
        for (let i = 0, h = 2; i < Load3.length; i += 2, h += 2) {
            fin[x].push(String.fromCharCode(Load3.substring(h, i)))
        }
    }
    const Load4 = fin.length;
    for (let j = 0; j < Load4; j++) {
        console.log(fin)
        const fina = fin.join("")
        const final = removecoma(fina)
        return final
    }
}

function save() {
    var saveLevel = varSav(lvl);
    var saveMoney = varSav(moni);
    var saveName = varSav(named);
    var saveLocation = varSav(loc);
    var saveResistence = varSav(ris);
    var saveString = saveLevel + "-" + saveMoney + "-" + saveName + "-" + saveLocation + "-" + saveResistence;
    return saveString;
}
/*
mechanics functions now
*/
function lvlUP() {
    lvl = parseInt(lvl)
    lvl = lvl += 1
    console.log("LEVELUP!!")
    return lvl
}

function moneyUp(add) {
    add = parseInt(add)
    moni = moni += add
    return moni
}

function rizzUp(rlvl, typ) {

}