import projects from '../info/projects'
import './Project.sass'

type projectProps = {
    title: string
    setPopupTitle: (title: string) => void 
}

type titleType = {
    [key: string]: string
}

const Project: React.FC<projectProps> = ({title, setPopupTitle}) => {

    const openPopup = ():void => {
        setPopupTitle(title)
        document.querySelector('.BigPopup')!.classList.add('BigPopup_active')
    }

    return (
        <div className='Project' onClick={openPopup}>
            <img className='Project__img' src={(projects[title] as titleType).icon} alt='project icon'/>
            <p className='Project_text'></p>
        </div>
        // <button className='Project' onClick={openPopup}>
        //     <img src={(projects[title] as titleType).icon} alt='project icon' />
        // </button>
    )
}

export default Project