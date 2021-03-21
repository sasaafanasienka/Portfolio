import telegram from '../../images/logo_telegram_light.svg'
import './Links.sass'

function Links() {
    return (
        <div className='Links'>
            <a href='https://t.me/sanya2020327'><img className='Links__icon' src={telegram}></img></a>
        </div>
    )
}
export default Links