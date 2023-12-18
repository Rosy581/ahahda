function varSave(varToBeSaved) {
	const savedVar = [];
	varToBeSaved.toString()
	for (let i = 0; i < varToBeSaved.length; i++) {
		savedVar.push(varToBeSaved.charCodeAt(i))
	}
	return savedVar.join('')

}
