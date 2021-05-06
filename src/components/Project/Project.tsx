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

const Project: React.FC<projectProps> = ({description, deployButtonText, deployLink, repoButtonText, repoLink, image, tehnologies}) => {

    let tehnologiesArr:Array<JSX.Element> = []

    for (let i = 0; i < tehnologies.length; i++) {
        tehnologiesArr.push(<div key={i} className='Project__tehnology'>{tehnologies[i]}</div>)
    }

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
    )
}

export default Project