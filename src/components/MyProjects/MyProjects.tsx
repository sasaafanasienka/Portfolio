import React, { useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Project from '../Project/Project'
import './MyProjects.sass'
import projects from '../info/projects.js'

const MyProjects: React.FC = () => {

    const setCarouselSettings = ():any => {
        const screenWidth = window.screen.width
        if (screenWidth > 900) { return 3 }
        if (screenWidth > 600) { return 2 }
        return 1
    }

    const [itemsPerView, setItemsPerview] = useState(setCarouselSettings())

    const content = projects.map((el) => {
        return(
            <Project 
                key={el.id}
                description={el.description}
                deployButtonText={el.deployPageButton}
                deployLink={el.deployPage}
                repoButtonText={el.repoButton}
                repoLink={el.repo}
                image={el.image}
            />
        )
    })


    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Carousel
                gap={20}
                itemsPerView={itemsPerView}
                loop={true}
            >
                {content}
            </Carousel>
        </div>
    )
}

export default MyProjects