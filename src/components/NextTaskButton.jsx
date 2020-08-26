import React from 'react'
import '../styles/NextTaskButton.css'
import { setNextLevel, setQuestion } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NextTaskButton() {
    const { answer, finish } = useSelector((reducer) => ({
        answer: reducer.answer,
        finish: reducer.finish,
    }))
    const dispatch = useDispatch()

    const handleNextLevel = () => {
        if (answer) {
            dispatch(setNextLevel())
            dispatch(setQuestion())
        }
    }
    return (
        <div className={answer ? 'nextTaskButton active' : 'nextTaskButton'} onClick={handleNextLevel} >
            {finish
                ? <Link to='/resault'>
                    <p >Finish game</p>
                </Link>
                : <p>Next level</p>}
        </div>
    )
}

export default NextTaskButton
