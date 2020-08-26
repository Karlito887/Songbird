import React from 'react'
import '../styles/Answers.css'
import { useSelector } from 'react-redux'
import badSound from '../assets/sound/falseSound.mp3'
import goodSound from '../assets/sound/trueSound.mp3'
import useSound from 'use-sound'

function AnswerItem({ handleAnswer, question, ...item }) {
    const [trueSound] = useSound(goodSound)
    const [falseSound] = useSound(badSound)
    const { answer, submitedAnswers } = useSelector((reducer) => ({
        answer: reducer.answer,
        submitedAnswers: reducer.submitedAnswers,
    }))
    const ref = React.useRef()

    const handleClick = (item) => {
        handleAnswer(item)
        if (!answer) {
            const value = item && question && item.id === question.id ? 'green' : 'red'
            ref.current.classList.add(value)

            item.id === question.id
                ? trueSound()
                : falseSound()

        }
    }

    React.useEffect(() => {
        if (submitedAnswers.length === 0) {
            ref.current.className = 'answers__circle'
        }
    })

    return (
        <li onClick={() => handleClick(item)}>
            <div ref={ref} className={'answers__circle'}></div>
            {item.name}
        </li>
    )
}

export default AnswerItem
