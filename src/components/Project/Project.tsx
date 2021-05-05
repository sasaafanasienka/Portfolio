import { ProgressPlugin } from 'webpack'
import projects from '../info/projects'
import Link from '../Link/Link'
import './Project.sass'

type projectProps = {
    description: string
    deployButtonText: string
    deployLink: string
    repoButtonText: string
    repoLink: string
    image: any
    tehnologies: any
}

// type titleType = {
//     [key: string]: string
// }

const Project: React.FC<projectProps> = ({description, deployButtonText, deployLink, repoButtonText, repoLink, image, tehnologies}) => {

    const tehnologiesArr = tehnologies.map((el:any) => {
        return <div className='Project__tehnology'>{el}</div>
    })

    return (
        <div className='Project'>
            <img className='Project__img' src={image} alt='project icon'/>
            <div className='Project__tehnologies'>
                {tehnologiesArr}
            </div>
            <p className='Project__description'>{description}</p>
            <div className='Project__buttons'>
                <Link type='text' target={deployLink}>{deployButtonText}</Link>
                <Link type='text' target={repoLink}>{repoButtonText}</Link>
            </div>
        </div>
        // <button className='Project' onClick={openPopup}>
        //     <img src={(projects[title] as titleType).icon} alt='project icon' />
        // </button>
    )
}

export default Project