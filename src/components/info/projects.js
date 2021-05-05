import textCounterLogo from '../../images/TextCounter.svg'
import carouselLogo from '../../images/Carousel.svg'
import newsAnalyzerLogo from '../../images/NewsAnalyzer.png'
import tetrisLogo from '../../images/Tetris.svg'

const projects = [
{
    name: "TextCounter",
    id: 3,
    description: 'Приложение для подсчета количества символов и генерации "рыбного" текста',
    deployPageButton: "смотреть на gh-pages",
    deployPage: "https://sasaafanasienka.github.io/Textcounter/",
    repoButton: "репозиторий",
    repo: "https://github.com/sasaafanasienka/Textcounter",
    image: textCounterLogo,
    tehnologies: ['React', 'Redux', 'SCSS']
},
{
    name: "Tetris",
    id: 4,
    description: "Моя версия тетриса",
    deployPageButton: "играть на gh-pages",
    deployPage: "https://sasaafanasienka.github.io/Tetris/",
    repoButton: "репозиторий",
    repo: "https://github.com/sasaafanasienka/Tetris",
    image: tetrisLogo,
    tehnologies: ['React', 'Redux', 'SASS']
},
{
    name: "NewsAnalyzer",
    id: 5,
    description: "Дипломный проект. Приложения для поиска новостей по заданной теме и подсчета статистики публикаций",
    deployPageButton: "смотреть на gh-pages",
    deployPage: "https://sasaafanasienka.github.io/Praktikum_diploma_project",
    repoButton: "репозиторий",
    repo: "https://github.com/sasaafanasienka/Praktikum_diploma_project",
    image: newsAnalyzerLogo,
    tehnologies: ['HTML', 'CSS', 'JS']
},
{
    name: "Carousel",
    id: 6,
    description: "Переиспользуемый react-компонент карусели. Управаляется как свайпами мышью и пальцами, так и экранными кнопками",
    deployPageButton: "смотреть на gh-pages",
    deployPage: "https://sasaafanasienka.github.io/Carousel/",
    repoButton: "репозиторий",
    repo: "https://github.com/sasaafanasienka/Carousel",
    image: carouselLogo,
    tehnologies: ['React', 'CSS']
}
]

export default projects