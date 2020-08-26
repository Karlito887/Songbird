export const setAnswer = (payload) => ({
    type: 'SET_ANSWERS',
    payload
})

export const giveAnswer = (payload) => ({
    type: 'GIVE_ANSWER',
    payload
})

export const setNextLevel = () => ({
    type: 'SET_NEXT_LEVEL',
})

export const setQuestion = () => ({
    type: 'SET_QUESTION',
})

export const restartGame = () => ({
    type: 'RESTART_GAME',
})

