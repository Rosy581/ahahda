/*
Things to save
Level
Money
Stats 
Name
game states
area
*/
var lvl = "21";//level uwu
var moni = 125;//dabloons
var str; //strength for mellee weapons
var hp; // current healtjj
var mh; //max health
var mgc; // magic for like magic yk
var ris; //resistence?
var named="";//cant change to name js spaghetti
var gs; //gamestate
var loc; //location
//ahhhhhh
function asciiIfi(asc) {
	if (typeof asc === "number") {
		asc = asc.toString();
	} else if (typeof asc === "undefined"||typeof asc === "boolean"){
		asc = 0;
	}
	var leng = asc.length;
	let final = "";

	for (let i = 0; i < leng; i++) {
		console.log(asc.charCodeAt(i));
		final += asc.charCodeAt(i);
	}
	return final;
}

function load(saveString) {
	const Load1 = saveString.split("-")
	

}
function nameSav() {
	const saveNam = [];
	let len = named.length;
	for (let i = 0; i < len; i++) {
        saveNam.push(named.fromCharCode[i])
	}
	var savName=saveNam.join(', ')
	return savName
}
 ''
function save() {
	var saveLevel = asciiIfi(lvl);
	var saveMoney = asciiIfi(moni);
	var saveName = nameSav();
	var saveLocation = asciiIfi(loc)
	var saveResistence = asciiIfi(ris)
	let saveString = saveLevel + "-" + saveMoney + "-" + saveName + "-" + saveLocation + "-" +;
}

save()
