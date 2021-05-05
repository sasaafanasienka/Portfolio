//icons
import textCounterLogo from '../../images/TextCounter.svg'
import carouselLogo from '../../images/Carousel.svg'
import newsAnalyzerLogo from '../../images/NewsAnalyzer.png'
import tetrisLogo from '../../images/Tetris.svg'
import newsAnalyzerInfo from './newsAnalyzerInfo'
import textCounterInfo from './textCounterInfo'
import carouselInfo from './carouselInfo'
import tetrisInfo from './tetrisInfo'

interface IPROJECTS {
    [key: string]: object
}

const projects: IPROJECTS = {
    'TextCounter': {
        name: 'TextCounter',
        icon: textCounterLogo,
        info: textCounterInfo
    },
    'Carousel': {
        name: 'Carousel',
        icon: carouselLogo,
        info: carouselInfo
    },
    'NewsAnalyzer': {
        name: 'NewsAnalyzer',
        icon: newsAnalyzerLogo,
        info: newsAnalyzerInfo
    },
    'Tetris': {
        name: 'Tetris',
        icon: tetrisLogo,
        info: tetrisInfo
    },
}

export default projects