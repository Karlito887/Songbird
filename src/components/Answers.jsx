import React from 'react'
import '../styles/Answers.css'
import { useSelector, useDispatch } from 'react-redux'
import { setAnswer, giveAnswer } from '../redux/actions'
import AnswerItem from './AnswerItem'

function Answers() {
    let { birds, question } = useSelector((reducer) => ({
        birds: reducer.birds,
        question: reducer.question
    }))

    const dispatch = useDispatch()

    const handleAnswer = (payload) => {
        dispatch(setAnswer(payload))
        dispatch(giveAnswer(payload))
    }
    return (
        <ul className='answers'>
            {birds && birds.map((item, index) => {
                return <AnswerItem {...item} key={index}
                    handleAnswer={handleAnswer} question={question} />
            })}
        </ul>
    )
}

export default Answers
