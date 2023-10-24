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
	function nameSav() {
		const saveNam = [];
		let len = named.length;
		for (let i = 0, h = 1; i < len; i++,h++) {
			saveNam.push(String.fromCharCode(named.substring(i,h)))
		}
		var savName = saveNam.join(', ')
		return savName
	}
	function asciiIfi(asc) {
		if (typeof asc === "number") {
			ascii = asc.toString();
			var leng = ascii.length;
			let final = "";
			for (let i = 0; i < leng; i++) {
				final += ascii.charCodeAt(i);
				return final; 
			}
		} else if (typeof asc === "string") {
			var asci = parseInt(asc)
			if (isNaN(asci)) {
				var x = Error("nuh uh")
				console.log(x)
			} else {
				var leng = asc.length;
				let final = "";
				for (let i = 0; i < leng; i++) {
					final += asc.charCodeAt(i);
				}
				return final;
			}
		} else if (!typeof asc === "number" || !typeof asc === "string") {
			asc = "0";
		}
	}
	/*
	1.Make second function to do each segment
	2. assign each segment to its corrisponding varible 
	*/
	function load(saveString) {
		const Load1 = saveString.split("-");
		const Load2 = Load1[x].toString();
		for (let i = 0, h=2; i < Load2.length; i+=2,h+=2) {
			console.log(String.fromCharCode(Load2.substring(h,i)))   
		}
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
