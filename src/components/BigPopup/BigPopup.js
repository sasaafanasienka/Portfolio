import './BigPopup.sass'
import closeIcon from '../../images/close.svg'

function BigPopup(props) {

    function closePopup() {
        document.querySelector('.BigPopup').classList.remove('BigPopup_active')
    }

    function closePopupByKeyboard(event) {
        console.log(event)
    }
    
    return (
        <div className='BigPopup' onKeyPress={closePopupByKeyboard}>
            <button className='BigPopup__close' onClick={closePopup}><img src={closeIcon}></img></button>
            <div className='BigPopup__content'>
                {props.children}
            </div>
        </div>
    )
}
export default BigPopup