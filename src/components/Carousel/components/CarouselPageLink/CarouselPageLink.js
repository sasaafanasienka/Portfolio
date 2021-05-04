import React, { Component, useState, useEffect } from "react";
import './CarouselPageLink.css';

function CarouselPageLink(props) {

    function goTo() {
        props.onClick(props.id)
    }

    return(
        <button className='CarouselPageLink' onClick={goTo}>
            {props.id + 1}
        </button>
    )
}

export default CarouselPageLink