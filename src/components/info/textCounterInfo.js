import './info.sass'

const textCounterInfo = 
<div className='info__container'>
    <h1 className='info info_title'>TextCounter</h1>
    <p className='info info_text'>Проект, который я придумал еще на прошлой работе. 
        Подсчет количества знаков — типичная задача для верстальщика полиграфии</p>
    <h2 className='info info_subtitle'>Как это работает?</h2>
    <p className='info info_text'>Приложение считает количество знаков во введенном пользователем тексте.
        Также есть возможность генерирования шаблонного текста с помощью API fish-text.ru</p>
    <h2 className='info info_subtitle'>Что сделано и какие технологии использованы?</h2>
    <ul className='info info_list'>
        <li className='info info_text'>Для настройки среды разработки использован create-react-app</li>
        <li className='info info_text'>Есть возможность выбора между светлой и темной темой (Redux)</li>
        <li className='info info_text'>Взаимодействие компонентов между собой просходит с помощью Redux</li>
        <li className='info info_text'>Выбранная тема оформления сохраняется в localStorage</li>
        <li className='info info_text'>В приложении есть одельные страницы "О проекте" и "Об авторе" (React Router)</li>
        <li className='info info_text'>Есть специальные инструменты для работы с буфером обмена</li>
        <li className='info info_text'>Запрос к серверу fish-text.ru выполняется с помощью Axios</li>
    </ul>
    <a className='info info_link' href='https://sasaafanasienka.github.io/Textcounter/'>Смотреть проект на gh-pages</a>
    <a className='info info_link' href='https://github.com/sasaafanasienka/Textcounter'>Смотреть репозиторий на GitHub</a>
</div>

export default textCounterInfo