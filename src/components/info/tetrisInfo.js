import './info.sass'

const tetrisInfo = 
<div className='info__container'>
    <h1 className='info info_title'>Tetris</h1>
    <p className='info info_text'>Моя версия тетриса</p>
    <h2 className='info info_subtitle'>Что сделано?</h2>
    <ul className='info info_list'>
        <li className='info info_text'>Работает на десктопах</li>
        <li className='info info_text'>Управление клавишами 8,4,5,6 на NumPad</li>
    </ul>
    <h2 className='info info_subtitle'>Что предстоит сделать?</h2>
    <ul className='info info_list'>
        <li className='info info_text'>Сделать управление на клавишах W,A,S,D, стрелках, 
            а также управление свайпами или экранными кнопками на мобильных устройствах</li>
        <li className='info info_text'>Добавить постепенно увеличивающийся уровень сложности</li>
        <li className='info info_text'>Изменить дизайн</li>
    </ul>
    <h2 className='info info_subtitle'>Технологии</h2>
    <ul className='info info_list'>
        <li className='info info_text'>HTML</li>
        <li className='info info_text'>CSS</li>
        <li className='info info_text'>React</li>
    </ul>
    <a className='info info_link' href='https://sasaafanasienka.github.io/Tetris/'>Играть на gh-pages</a>
    <a className='info info_link' href='https://github.com/sasaafanasienka/Tetris'>Смотреть репозиторий на GitHub</a>
</div>

export default tetrisInfo