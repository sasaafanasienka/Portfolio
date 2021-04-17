import './Project.sass'
import info from '../info/projects'

type projectProps = {
    name: string;
    setPopupData: (info: JSX.Element) => void 
}

type infoType = {
    name: string;
    icon: string;
    info: JSX.Element;
};

const Project: React.FC<projectProps> = (props) => {

    function openPopup() {
        // props.setPopupData(info[props.name].info)
        // document.querySelector('.BigPopup').classList.add('BigPopup_active')
    }

    return (
        <button className='Project' onClick={openPopup}>
            <img alt='project icon' />
            {/* <img src={info[props.name].icon} alt='project icon' /> */}
        </button>
    )
}
export default Project