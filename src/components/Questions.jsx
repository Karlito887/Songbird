import React from 'react'
import '../styles/Questions.css'
import { useSelector } from 'react-redux'


function Questions() {
    const { level } = useSelector((reducer) => ({
        level: reducer.level
    }))

    const items = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']


    return (
        <ul className='questions'>
            {items.map((item, index) => {
                return <li className={index === level ? 'questions__item active' : 'questions__item'}
                    // onClick={() => setActive(index)}
                    key={index + item}>{item}</li>
            })}
        </ul>
    )
}

export default Questions
