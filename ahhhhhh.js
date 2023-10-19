/*
Things to save
Level
Money
Stats 
Name
game states
area
*/
var lvl = "21"; // level uwu
var moni = 125; // dabloons
var str; // strength for melee weapons
var hp; // current health
var mh; // max health
var mgc; // magic for like magic, you know
var ris; // resistance?
var named = "Greg"; // can't change to name, JS spaghetti
var gs; // game state
var loc; // location

function asciiIfi(asc) {
    if (typeof asc === "number") {
        asc = asc.toString();
    } else if (typeof asc === "undefined" || typeof asc === "boolean") {
        asc = "0";
    }
    var leng = asc.length;
    let final = "";

    for (let i = 0; i < leng; i++) {
        console.log(asc.charCodeAt(i));
        final += asc.charCodeAt(i);
    }
	return final;
}
/*
Fix load function
rn it splits to an array maybe use that to get the substrings?
figure out a way to sperate each charcode
*/
function load(saveString) {
    const Load1 = saveString.split("-");
	for (let i=0; i<saveString.length();i++){
		let h=2
		console.log(String.fromCharCode(saveString.substring()))
	}
}

function nameSav() {
    const saveNam = [];
    let len = named.length;
    for (let i = 0; i < len; i++) {
        saveNam.push(named.charAt(i));
    }
    var savName = saveNam.join(', ');
    return savName;
}

function save() {
    var saveLevel = asciiIfi(lvl);
    var saveMoney = asciiIfi(moni);
    var saveName = nameSav();
    var saveLocation = asciiIfi(loc);
    var saveResistence = asciiIfi(ris);
    var saveString = saveLevel + "-" + saveMoney + "-" + saveName + "-" + saveLocation + "-" + saveResistence;
    return saveString;
}

save();
