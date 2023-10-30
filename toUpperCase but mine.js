function toUpperCase(string){
    var final = [];
function upA(){final.push("A")}
function upB(){final.push("B")}
function upC(){final.push("C")}
function upD(){final.push("D")}
function upE(){final.push("E")}
function upF(){final.push("F")}
function upG(){final.push("G")}
function upH(){final.push("H")}
function upI(){final.push("I")}
function upJ(){final.push("J")}
function upK(){final.push("K")}
function upL(){final.push("L")}
function upM(){final.push("M")}
function upN(){final.push("N")}
function upO(){final.push("O")}
function upP(){final.push("P")}
function upQ(){final.push("Q")}
function upR(){final.push("R")}
function upS(){final.push("S")}
function upT(){final.push("T")}
function upU(){final.push("U")}
function upV(){final.push("V")}
function upW(){final.push("W")}
function upX(){final.push("X")}
function upY(){final.push("Y")}
function upZ(){final.push("Z")}
var type="";
var killME={
    "a": upA(),
    "b": upB(),
    "c": upC(),
    "d": upD(),
    "e": upE(),
    "f": upF(),
    "g": upG(),
    "h": upH(),
    "i": upI(),
    "j": upJ(),
    "k": upK(),
    "l": upL(),
    "m": upM(),
    "n": upN(),
    "o": upO(),
    "p": upP(),
    "q": upQ(),
    "r": upR(),
    "s": upS(),
    "t": upT(),
    "u": upU(),
    "v": upV(),
    "w": upW(),
    "x": upX(),
    "y": upY(),
    "z": upZ()
}
    for(let i = 0; i<string.length;i++)
    {
       killME[string.charAt(i)]
    }
    final=final.join("")
    return final
}