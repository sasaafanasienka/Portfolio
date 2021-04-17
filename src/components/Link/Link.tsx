import './Link.sass'

type LinkProps = {
    type: string,
    target: string
    children: HTMLElement
}

const Link: React.FC<LinkProps> = ({type,target,children}) => {
    const style = (type === 'text') ? 
        {
            width: 'auto',
            padding: '8px'
        } :
        {
            width: '30px',
            padding: '0px',
        }
    
    return (
        <a className='Link' href={target} style={style}>{children}</a>
    )
}
export default Link