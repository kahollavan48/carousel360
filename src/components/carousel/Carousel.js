import React, {Component} from "react";
import {UI_Carousel} from "./ui_carousel";
import CarouselSlide from "./CarouselSlide";
import {UI_Carousel_Slider} from "./ui_carousel_slider";

class Carousel extends Component {

    state = {
        rotation: 45,
        radius: 300,
        stage: 1,
        bars: [
            {id: 1, image: "cc1.png", text: 'image 1'},
            {id: 2, image: "cc2.png", text: 'image 2'},
            {id: 3, image: "cc3.png", text: 'image 3'},
            {id: 4, image: "cc2.png", text: 'image 2'}
        ]
    };

    rotateScene = () => {
      this.setState({rotation: this.state.rotation + 90});
      this.changeStage();
    };

    changeStage = () => {

        const {stage} = this.state;

        if(stage === 4){
            this.setState({stage: 1})
        }else {
            this.setState({stage: stage + 1})
        }
    };

    rotateChild = (rotation) => {
        const childRotation = -rotation;
        return childRotation;
    };

    getInitialCoordinates = (index) => {
        const {radius,bars} = this.state;

        const y = 0;
        const x = radius * Math.sin(Math.PI / bars.length);
        const z = radius * Math.cos(Math.PI / bars.length);

        // 4 cans

        switch(index){
            case 1:
                return {
                    x:x,
                    y:y,
                    z:z
                }
            case 2:
                return {
                    x:-x,
                    y:y,
                    z:z
                }
            case 3:
                return {
                    x:x,
                    y:y,
                    z:-z
                }
            case 4:
                return {
                    x:-x,
                    y:y,
                    z:-z
                }
        }
        // 3 cans
        // switch(index){
        //     case 1:
        //         return {
        //             x:x,
        //             y:y,
        //             z:-z
        //         }
        //     case 2:
        //         return {
        //             x:0,
        //             y:y,
        //             z:radius
        //         }
        //     case 3:
        //         return {
        //             x:-x,
        //             y:y,
        //             z:-z
        //         }
        // }

    };

    render() {

        const {rotation,bars,stage} = this.state;

        return (
            <UI_Carousel>
                <div className="carousel-scene" onClick={this.rotateScene}>
                    <UI_Carousel_Slider rotation={rotation}>
                        {
                            bars.map((bar,index) => <CarouselSlide
                                key={bar.id}
                                data={bar}
                                stage={stage}
                                position={this.getInitialCoordinates(index+1)}
                                rotation={this.rotateChild(rotation)}
                            />)
                        }
                    </UI_Carousel_Slider>
                </div>
            </UI_Carousel>
        )
    };
};

export default Carousel;