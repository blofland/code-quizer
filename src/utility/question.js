import { shuffle } from "lodash"
export default function Question(question, answer, ...choices){
    choices = shuffle([...choices, answer])
    const index = choices.indexOf(answer)
    return {
        question, 
        choices, 
        answer: index
    }

}
