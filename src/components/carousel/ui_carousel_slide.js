import styled from 'styled-components';

export const UI_Carousel_Slide = styled.div`
        width: 200px;
        height: 200px;
        position: absolute;
        top: -100px;
        backface-visibility: hidden;
        transition: 1s ease; 
        
        transform: translate3d(${({position}) => `${position.x}px, ${position.y}px,${position.z}px`}) rotateY(${({rotation}) => `${rotation}deg`});
               
        & .image-box {
            height: 150px;
            width: 150px;
            margin: 0 auto;
            transition: 1s ease;
        
            & img {
                width: 100%;                                                           
            }
        }              
`;