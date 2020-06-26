import styled from 'styled-components';

export const UI_Carousel = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .carousel-scene {
        padding: 20px;
        width: 100%;
        height: 400px;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 1800px;
    }
    
`;