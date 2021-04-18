import './BigPopup.sass'
import closeIcon from '../../images/close.svg'
import projects from '../info/projects'
import React from 'react'

type popupProps = {
    title: string;
}

type projectsType = {
    [key: string]: string
}

const BigPopup:React.FC<popupProps> = ({title}) => {

    function closePopup() {
        document.querySelector('.BigPopup')!.classList.remove('BigPopup_active')
    }
    
    function closePopupByKeyboard(event: React.KeyboardEvent) {
        console.log(event)
        document.querySelector('.BigPopup')!.classList.remove('BigPopup_active')
    }
    
    return (
        <div className='BigPopup' onKeyPress={closePopupByKeyboard}>
            <button className='BigPopup__close' onClick={closePopup}><img src={closeIcon} alt='close popup button'></img></button>
            <div className='BigPopup__content'>
                {title ? (projects[title] as projectsType).info : null}
            </div>
        </div>
    )
}
export default BigPopup