function toUpperCase(string) {
    let final = []
    const cap = new Map()
    for(let i = 97;i<123;i++){
        cap.set(String.fromCharCode(i),String.fromCharCode(i-32))
        cap.set(String.fromCharCode(i-32),String.fromCharCode(i-32))
    }
    for(let i = 0;i<string.length;i++){
        final.push(cap.get(string[i]))
    }
    return final.join("")
}
console.log(toUpperCase("tEst"))