import React from 'react'
import '../styles/Description.css'
import { useSelector } from 'react-redux'

function Description() {
    const { submitedAnswers } = useSelector((reducer) => ({
        submitedAnswers: reducer.submitedAnswers,
    }))

    let currentBird = submitedAnswers[submitedAnswers.length - 1]

    return (
        <div className='description'>
            {currentBird 
                ? <div>
                    <div className='description__row'>
                        <img className='description__img'
                            src={currentBird.image} alt="img" />
                        <div className='description__data'>
                            <h3>{currentBird.name}</h3>
                            <p className='middle'>{currentBird.species}</p>
                            <audio src={currentBird.audio} controls></audio>
                        </div>
                    </div>
            <p className='description__text'>{currentBird.description}</p>
                </div>
                : <div>
                    <p>Послушайте плеер.</p>
                    <p>Выберите птицу из списка</p>
                </div>
            }

        </div>
    )
}

export default Description
