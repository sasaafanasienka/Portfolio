import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Project from '../Project/Project'
import './MyProjects.sass'
import projects from '../../data/projects'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const MyProjects: React.FC = () => {

    const renderContent = () => {
        return projects.map((project: any) => <SwiperSlide>
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
            </SwiperSlide>
        )
    }

    return (
        <div className='MyProjects'>
            <h2 className='MyProjects__title'>Мои проекты</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
            >
                {renderContent()}
            </Swiper>
        </div>
    )
}

export default MyProjects