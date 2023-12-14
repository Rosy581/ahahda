class questions {
    question: string
    value: number
    constructor(question, answer, value) {
        this.question = question
        this.answer = answer
        this.value = value
        this.answered = false
        this.timesUp = new Audio('https://www.myinstants.com/media/sounds/times-up.mp3')
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
}
function genQues(question) {
    createElement()// put code for question
}
//figure out how to set up so when you press during the 30 seconds it will stop the timer
async function timer(active: boolean) {
    if (active === true) {
        return new Promise((resolve, reject) => {
            resolve(timesUp.play())
        })
    }
}
function add(team, amount) {
    team += amount
    this.answered = true
}
function subtract(team, amount) {
    team -= amount
}
function qState() {
    //update state of question from 
}
function main() {
    //return to homescreen and remove answered questions

}
