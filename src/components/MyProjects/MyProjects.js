import React, { useState } from 'react'
import telegram from '../../images/logo_telegram_light.svg'
import BigPopup from '../BigPopup/BigPopup'
import Project from '../Project/Project'
import './MyProjects.sass'

function MyProjects() {
    const [popupData, setPopupData] = useState('')

    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Project name='NewsAnalyzer' setPopupData={setPopupData}/>
            <Project name='TextCounter' setPopupData={setPopupData}/>
            {/* <Project name='Tetris' setPopupData={setPopupData}/> */}
            <Project name='Carousel' setPopupData={setPopupData}/>
            <BigPopup>
                {popupData}
            </BigPopup>
        </div>
    )
}
export default MyProjects