import styled from 'styled-components';

export const UI_Carousel_Slider = styled.div`
    width: 0;
    height: 0;   
    display: flex;
    justify-content: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s;
    transform: translateZ(-200px) rotateX(-7deg) rotateY(${({rotation}) => `${rotation}deg`});  
         
`;