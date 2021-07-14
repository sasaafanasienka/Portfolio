import telegram from '../../images/logo_telegram_light.svg'
import linkedin from '../../images/logo_linkedin_light.svg'
import github from '../../images/logo_github_light.svg'
import mail from '../../images/logo_mail_light.svg'
import './MyLinks.sass'
import Link from '../Link/Link'

const MyLinks: React.FC = () => {
    return (
        <div className='MyLinks'>
            <Link type='icon' target='mailto:afanasienka@yandex.by'>
                <img className='MyLinks__icon' src={mail} alt='mail button'/>
            </Link>
            <Link type='icon' target='https://t.me/sanya2020327'>
                <img className='MyLinks__icon' src={telegram} alt='telegram button'/>
            </Link>
            <Link type='icon' target='https://www.linkedin.com/in/александр-афанасенко-bb672b15a/'>
                <img className='MyLinks__icon' src={linkedin} alt='linkedin button'/>
            </Link>
            <Link type='icon' target='https://github.com/sasaafanasienka'>
                <img className='MyLinks__icon' src={github} alt='github button'/>
            </Link>
            <Link type='text' target='https://cloud.mail.ru/public/dFd8/aszwYWr4T'>СКАЧАТЬ РЕЗЮМЕ</Link>
        </div>
    )
}
export default MyLinks