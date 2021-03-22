// import telegram from '../../images/logo_telegram_light.svg'
// import linkedin from '../../images/logo_linkedin_light.svg'
// import github from '../../images/logo_github_light.svg'
import './Link.sass'

function Link(props) {
    const style = (props.type === 'text') ? 
        {
            width: 'auto',
            padding: '8px'
        } :
        {
            width: '30px',
            padding: '0px',
        }
    
    return (
        <a className='Link' href={props.target} style={style}>{props.children}</a>
    )
}
export default Link