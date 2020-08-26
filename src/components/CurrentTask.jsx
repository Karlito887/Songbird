import React from 'react'
import '../styles/CurrentTask.css'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestion } from '../redux/actions'

function CurrentTask() {
    const audioRef = React.useRef()
    const { question, answer } = useSelector((reducer) => ({
        question: reducer.question,
        answer: reducer.answer
    }))
    console.log(question && question.name)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(setQuestion())
    }, [dispatch])
    React.useEffect(() => {
        if(answer) {
            audioRef.current.load()
        }
    }, [answer])
    return (
        <div className='current-task'>
            <img src={answer
                ? question.image
                : 'https://n7.nextpng.com/sticker-png/492/383/sticker-png-bird-silhouette-beak-bird-animals-branch-monochrome-fauna.png'}
                className='current-task__bird' alt='img'></img>
            <ul>
                <li>
                    <h2>{answer
                        ? question.name
                        : '******'}</h2>
                </li>
                <li>
                    <audio ref={audioRef}
                        src={question && question.audio} controls
                        className='current-task__sound'></audio>
                </li>
            </ul>
        </div>
    )
}


export default CurrentTask
