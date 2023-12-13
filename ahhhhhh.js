var lvl = "21"; // level uwu
var moni = 125; // dabloons
var str; // strength for melee weapons
var hp; // current health
var mh; // max health
var mgc; // magic for like magic, you know
var ris = [[1],["bludgen"]]; // resistance?
var named = "GREG"; // can't change to name, JS spaghetti
var gs; // game state
var loc; // location 

function varSav(sava) {
    const saveVar = [];
    let a = parseInt(sava)
    sava.toString()
    for (let i = 0; i < len; i++) {
        saveVar.push(vared.charCodeAt(i))
    }
    return saveVar.join('')

}
//funcy town
function pushLVL(nLVL) {
    lvl = nLVL
}

function pushVar(varTBP) {
    var type = prompt("Input var to be pushed")
    var vats = {
        "lvl": pushLVL(varTBP)
    }

}

function load(saveString) {
    const fin = []
    saveString.split("-");
    for (let x = 0; x < saveString.length; x++) {
        const Load3 = Load1[x].toString();
        for (let i = 0, h = 2; i < Load3.length; i += 2, h += 2) {
            fin[x].push(String.fromCharCode(Load3.substring(h, i)))
        }
    }   return fin.join()
}

function save() {
    var saveString = varSav(lvl) + "-" + varSav(moni) + "-" + varSav(named) + "-" + varSav(loc) + "-" + varSav(ris);
    return saveString;
}
/*
mechanics functions now
*/
function lvlUP() {
    lvl = parseInt(lvl)
    lvl++
    console.log("LEVELUP!!")
    return lvl
}

function moneyUp(add) {
    add = parseInt(add)
    moni = moni += add
    return moni
}

function rizzUp(rlvl, typ) {
    if(ris.length<=1){
        ris = [[],[]];
        ris[0].push(rlvl)
        ris[1].push(typ)
    } else {
        var x = prompt("You already have a resistnece active would you like to replace it? Y/N")
        if (x.toUpperCase() === "y"){        
            ris = [[],[]];
            ris[0].push(rlvl)
            ris[1].push(typ)
    } else {}
}
}

function changeName(nNam){
    if(nNam.toUpperCase() === named){
        alert("New name can not be the same as old name")
    } else {
        named = nNam.toUpperCase()
    }
    return(nNam)
}