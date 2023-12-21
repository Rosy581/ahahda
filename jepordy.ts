let teams
class team {
    name: string
    constructor(name) {
        this._name = name
    }

}
const team1 = new teams("one")
team1.classId
class questions {
    _question: string
    _value: number
    _answer: string;
    _answered = false
    _timesUp = new Audio('https://www.myinstants.com/media/sounds/times-up.mp3')
    constructor(question: string, answer: string, value: number) {
        this._question = question
        this._answer = answer
        this._value = value
    }
    get answer() {
        return this.answer
    }
    get question() {
        return this.question
    }
    get value() {
        return this.value
    }

    //figure out how to set up so when you press during the 30 seconds it will stop the timer
    win(team: number, amount: number) {
        team.points += amount
        _answered = true
    }
    subtract(team, amount) {
        team -= amount
    }
}
function main() {
    //return to homescreen and remove answered questions

}
const test = new questions()
function loadQuestion(question: object) {
    // put code for question
    
}