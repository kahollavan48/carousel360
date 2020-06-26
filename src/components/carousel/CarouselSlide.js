import React from "react";
import {UI_Carousel_Slide} from "./ui_carousel_slide";

const CarouselSlide = ({data,position,rotation,stage}) => {

    const {image, text} = data;

    return (
        <UI_Carousel_Slide stage={stage} position={position} rotation={rotation}>
            <div className="image-box">
                <img src={`/images/${image}`} alt="image"/>
            </div>
        </UI_Carousel_Slide>
    )
};

export default CarouselSlide;