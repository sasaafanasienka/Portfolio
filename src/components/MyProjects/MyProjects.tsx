import React, { useState } from 'react'
import BigPopup from '../BigPopup/BigPopup'
import Carousel from '../Carousel/Carousel'
import Project from '../Project/Project'
import './MyProjects.sass'

const MyProjects: React.FC = () => {

    const [popupTitle, setPopupTitle] = useState<string>()

    const content = [
        <Project key='1' title='NewsAnalyzer' setPopupTitle={setPopupTitle}/>,
        <Project key='2' title='TextCounter' setPopupTitle={setPopupTitle}/>,
        <Project key='3' title='Tetris' setPopupTitle={setPopupTitle}/>,
        <Project key='4' title='Carousel' setPopupTitle={setPopupTitle}/>
    ]

    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Carousel
                gap={20}
                itemsPerView={3}
                loop={true}
            >
                {content}
            </Carousel>
            <BigPopup title={popupTitle!}/>
        </div>
    )
}

export default MyProjects