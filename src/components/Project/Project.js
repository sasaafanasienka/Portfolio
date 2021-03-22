import './Project.sass'
import info from '../../components/info/projects'

function Project(props) {

    function openPopup() {
        props.setPopupData(info[props.name].info)
        document.querySelector('.BigPopup').classList.add('BigPopup_active')
    }

    return (
        <button className='Project' onClick={openPopup}>
            <img src={info[props.name].icon}></img>
        </button>
    )
}
export default Project