import React from 'react'
import CurrentTask from './CurrentTask'
import Answers from './Answers'
import Description from './Description'
import NextTaskButton from './NextTaskButton'

function MainContent() {
    return (
        <div>
            <CurrentTask />
            <div className='row'>
                <Answers />
                <Description />
            </div>
            <NextTaskButton />
        </div>
    )
}

export default MainContent
