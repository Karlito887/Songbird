import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/Resault.css'
import { restartGame } from '../redux/actions'

function Resault() {
    const { score } = useSelector((reducer) => ({
        score: reducer.score,
    }))

    const dispatch = useDispatch()
    const hanldeRestart = () => {
       return dispatch(restartGame())
    }
    return (
        <div className='resault'>
            <h1>Вы набрали {score}/30 баллов!</h1>
            {score === 30
                ? <>
                    <h2>Поздравляем с победой!!!</h2>
                    <img className='bestResaultImg'
                        src='https://ocenschiki-i-eksperty.ru/files/comment-images/7c/df/a9/7cdfa9d56d1401187368486d134b4b1513d9de367daa473c3e336399cabe1f49_zoom.jpg' alt='img' />
                </>
                : <Link to='/'>
                    <div className='restartGameBtn' onClick={hanldeRestart}>
                        <p>Попробовать ещё раз!</p>
                    </div>
                </Link>}
        </div>
    )
}

export default Resault
