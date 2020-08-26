import birdsData from "../birdsData"
import badSound from '../assets/sound/falseSound.mp3'
import goodSound from '../assets/sound/trueSound.mp3'

let initialState = {
    level: 0,
    score: 0,
    submitedAnswers: [],
    birds: birdsData[0],
    question: null,
    answer: false,
    maxMark: 5,
    finish: false,
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ANSWERS':
            return {
                ...state,
                submitedAnswers: [...state.submitedAnswers, action.payload]
            }
        case 'SET_NEXT_LEVEL':
            const nextLevel = state.level !== 5 ? state.level + 1 : 0
            return {
                ...state,
                level: nextLevel,
                birds: birdsData[nextLevel],
                answer: false,
                submitedAnswers: [],
                maxMark: 5
            }
        case 'SET_QUESTION':
            const randomNumber = Math.floor(Math.random() * 6)
            return {
                ...state,
                question: state.birds[randomNumber]
            }
        case 'GIVE_ANSWER':
            const value = state.submitedAnswers.find((elem) => {
                return elem && state.question && elem.id === state.question.id ? true : false
            })
            let currentMark = value ? state.maxMark 
            : state.maxMark > 0 ? state.maxMark - 1 
            : 0

            return {
                ...state,
                score: value ? state.score + currentMark : state.score,
                answer: value,
                maxMark: value ? 0 : currentMark,
                finish: state.level === 5 && value ? true : false
            }
        case 'RESTART_GAME': 
            return {
                ...initialState
            }    
        default:
            return state
    }
}

export const trueSound = new Audio(goodSound)
export const falseSound = new Audio(badSound)
console.log('render from reducer');
export default reducer