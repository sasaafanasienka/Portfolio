import './Link.sass'

type LinkProps = {
    type: string,
    target: string,
    children: any
}

const Link: React.FC<LinkProps> = (props) => {
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