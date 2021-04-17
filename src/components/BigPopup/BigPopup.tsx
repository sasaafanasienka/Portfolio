import './BigPopup.sass'
import closeIcon from '../../images/close.svg'
import projects from '../info/projects'
import React from 'react'

type popupProps = {
    title: string;
}

const BigPopup:React.FC<popupProps> = ({title}) => {

    // function closePopup() {
    //     document.querySelector('.BigPopup').classList.remove('BigPopup_active')
    // }

    function closePopupByKeyboard(event: React.KeyboardEvent) {
        console.log(event)
    }
    
    return (
        <div className='BigPopup' onKeyPress={closePopupByKeyboard}>
            {/* <button className='BigPopup__close' onClick={closePopup}><img src={closeIcon}></img></button> */}
            <div className='BigPopup__content'>
                {/* {projects[title]} */}
            </div>
        </div>
    )
}
export default BigPopup