import telegram from '../../images/logo_telegram_light.svg'
import linkedin from '../../images/logo_linkedin_light.svg'
import github from '../../images/logo_github_light.svg'
import './Links.sass'

function Links() {
    return (
        <div className='Links'>
            <a href='https://t.me/sanya2020327'><img className='Links__icon' src={telegram}></img></a>
            <a href='https://www.linkedin.com/in/александр-афанасенко-bb672b15a/'><img className='Links__icon' src={linkedin}></img></a>
            <a href='https://github.com/sasaafanasienka'><img className='Links__icon' src={github}></img></a>
            <a className='Links__button' href='https://cloud.mail.ru/public/pGDt/DTBYUnmk7'>СКАЧАТЬ РЕЗЮМЕ</a>
        </div>
    )
}
export default Links