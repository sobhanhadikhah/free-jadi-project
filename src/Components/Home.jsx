//import ImageSlider from "./ImageSlider";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation, EffectFade } from "swiper";
import Toastsme from "./Toast";
import Cardlister from "./Cardlister";
const Home = () => {
    const slides = [
        { url: `https://images.freeimages.com/images/large-previews/ac8/tea-party-in-the-forest-1641499.jpg`, title: `forest1` },
        { url: `https://images.freeimages.com/images/large-previews/127/textured-old-leafs-in-spring-1641389.jpg`, title: `forest2` },
        { url: `https://images.freeimages.com/images/large-previews/1e8/close-up-empty-nest-with-sprouts-1641247.jpg`, title: `forest3` },
        { url: `https://images.freeimages.com/images/large-previews/aa4/motorcycle-on-the-sidelines-in-the-forest-a-walk-on-a-motorcycle-1641510.jpg`, title: `forest4` },
    ]
    const containerstyle = {
        width: `500px`,
        height: `280px`,
        margin: `0 auto`,
    };
    const [imgl, setimg] = useState([
        {
            url: `https://wallpapershome.com/images/pages/pic_h/24251.jpg`,
            title: `1`
        },
        {
            url: `https://wallpapershome.com/images/pages/pic_h/24194.jpg`,
            title: `2`
        }, {
            url: `https://wallpapershome.com/images/pages/pic_h/24184.jpg`,
            title: `3`
        }, {
            url: `https://wallpapershome.com/images/pages/pic_h/24251.jpg`,
            title: `4`
        }, {
            url: `https://wallpapershome.com/images/pages/pic_h/24119.jpeg`,
            title: `5`
        },
    ])
    const [textcenter, settc] = useState("")
    const textcenterclass = () => {
        settc(`tc`)
    }
    return (
        <div className="container " >
            {/* <div style={containerstyle} >
                <ImageSlider slides={slides} />

            </div> */}

            <Swiper spaceBetween={30} navigation={true} autoplay={true} modules={[Navigation, EffectFade]} effect='fade' className="mySwiper">
                {imgl.map((src, index) => {
                    return <SwiperSlide key={index}  ><img className="br3 ma3 " src={src.url} alt={src.title} />    </SwiperSlide>
                })}
            </Swiper>
            <div />

            <Cardlister />


        </div>
    );
}

export default Home;