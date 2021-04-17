import './info.sass'

const newsAnalyzerInfo = 

<div className='info__container'>
    <h1 className='info info_title'>NewsAnalyzer — мой дипломный проект на Яндекс.Практикуме</h1>
    <p className='info info_text'>Это сервис для анализа происходящих в мире событий. 
        Его задача — установить, насколько популярны новости на определённую тему.</p>
    <h2 className='info info_subtitle'>Как это работает?</h2>
    <p className='info info_text'>Пользователь вводит в строку поиска ключевые слова, по которым хочет найти новости.</p>
    <p className='info info_text'>По нажатию кнопки «Искать» сайт выполняет два действия:</p>
    <ul className='info info_list'>
        <li className='info info_text'>находит все статьи по запросу за последнюю неделю и отрисовывает карточки с новостями;</li>
        <li className='info info_text'>подсчитывает статистику: сколько новостей вышло в каждый из последних семи дней. Статистика отрисовывается на отдельной странице.</li>
    </ul>
    <h2 className='info info_subtitle'>Что сделано?</h2>
    <p className='info info_text'>Настроен Webpack; Настроен Babel для минификации и транспиляции JS-кода; PostCSS установлен и настроен для минификации 
        CSS-кода и простановки вендорных префиксов.; Установлены дополнительные плагины; Для каждой страницы скомпилирован свой CSS-бандл.;
        Настроен .gitignore; Проект адаптирован под различные разрешения экрана;</p>
    <p className='info info_important-text'>Важно: со времени разработки этого проекта политика newsapi.org изменилась, 
        и теперь на бесплатном тарифном плане не поддерживаются запросы к серверу из браузера. Поэтому для того, чтобы оценить 
        работу приложения нужно запустить проект на локальном сервере. Инструкция по запуску есть в readme.md на GitHub. 
        В коде специально оставлен вывод в консоль результатов запроса к серверу, чтобы было видно, какая именно ошибка возникает
    </p>
    <a className='info info_link' href='https://sasaafanasienka.github.io/Praktikum_diploma_project'>Смотреть проект на gh-pages</a>
    <a className='info info_link' href='https://github.com/sasaafanasienka/Praktikum_diploma_project'>Смотреть репозиторий на GitHub</a>
</div>

export default newsAnalyzerInfo