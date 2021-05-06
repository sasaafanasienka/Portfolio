import userpic from '../../images/userpic.jpg'
import './AboutMe.sass'

const AboutMe: React.FC = () => {
    return (
        <div className='AboutMe'>
            <img className='AboutMe__userpic' src={userpic} alt='userpic'/>
            <div style={{width: '50%'}}>
                <h2 className='AboutMe__title'>Александр Афанасенко</h2>
                <h3 className='AboutMe__subtitle'>Junior frontend-разработчик</h3>
            </div>
        </div>
    )
}
export default AboutMe