import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Project from '../Project/Project'
import './MyProjects.sass'
import projects from '../info/projects.js'

const MyProjects: React.FC = () => {

    const getCarouselSettings = ():any => {
        const screenWidth = window.screen.width
        if (screenWidth > 900) {  
            return {
                itemsPerView: 3,
                buttonSize: 40,
                buttonPos: -40
            }
        }
        if (screenWidth > 600) {  
            return {
                itemsPerView: 2,
                buttonSize: 30,
                buttonPos: -30
            }
        }
        return {
            itemsPerView: 1,
            buttonSize: 20,
            buttonPos: -20
        }
    }

    const [settings, setSettings] = useState(getCarouselSettings())

    const content = projects.map((project: any) => {
        return(
            <Project 
                key={project.id}
                description={project.description}
                deployButtonText={project.deployPageButton}
                deployLink={project.deployPage}
                repoButtonText={project.repoButton}
                repoLink={project.repo}
                image={project.image}
                tehnologies={project.tehnologies}
            />
        )
    })

    console.log(settings)

    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Carousel
                gap={20}
                itemsPerView={settings.itemsPerView}
                loop={true}
                buttonSize={settings.buttonSize}
                buttonPos={settings.buttonPos}
            >
                {content}
            </Carousel>
        </div>
    )
}

export default MyProjects