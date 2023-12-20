let lvl = "21"; // level uwu
let skillPoints = {
    magiks:11,
    strength:0,
    unAssigned:parseInt(lvl)-magiks+strength,
}
let money = 125; // dabloons
let strength; // strength for melee weapons
let currenthp; // current health
let maxhp; // max health // magic for like magic, you know
let named = "GREG"; // can't change to name, JS spaghetti
let gameState; // game state
let loc; // location 
let items = {
    "arrows":30,
    "bones":2,
    "coins":money
}

function varSave(varToBeSaved) {
    const savedVar = [];
    varToBeSaved.toString()
    for (let i = 0; i < varToBeSaved.length; i++) {
        savedVar.push(varToBeSaved.charCodeAt(i))
    }
    return savedVar.join('')
}
//funcy town
function pushLVL(nLVL) {
    lvl = nLVL
}

function pushVar(varTBP) {
    const pushers = {
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
    } return fin.join()
}

function save() {
    let saveString = varSave(lvl) + "-" + varSave(moni) + "-" + varSave(named) + "-" + varSave(loc) + "-" + varSave(ris);
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

function changename(nNam) {
    if (nNam.toUpperCase() === named) {
        alert("New named can not be the same as old named")
    } else {
        named = nNam.toUpperCase()
    }
    return (nNam)
}