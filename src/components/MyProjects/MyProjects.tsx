import React, { useState } from 'react'
import BigPopup from '../BigPopup/BigPopup'
import Project from '../Project/Project'
import './MyProjects.sass'

const MyProjects: React.FC = () => {

    const [popupTitle, setPopupTitle] = useState<string>()

    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Project title='NewsAnalyzer' setPopupTitle={setPopupTitle}/>
            <Project title='TextCounter' setPopupTitle={setPopupTitle}/>
            <Project title='Tetris' setPopupTitle={setPopupTitle}/>
            <Project title='Carousel' setPopupTitle={setPopupTitle}/>
            <BigPopup title={popupTitle!}/>
        </div>
    )
}

export default MyProjects