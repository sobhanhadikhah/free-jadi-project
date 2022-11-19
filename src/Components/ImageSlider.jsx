import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [curentinex, setcurrentindex] = useState(0);
    const slidestyle = {
        height: `100%`,
        position: `relative`

    }
    const imageStyles = {

        width: `50vr`,
        height: `500px`,
        borderRadius: `10px`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        objectfit: `cover`,
        backgroundImage: `url(${slides[curentinex].url})`,
    }
    const leftArrowStyle = {
        position: `absolute`,
        top: `50%`,
        transform: `translate(0, -50%)`,
        right: `32px`,
        fontSize: `45px`,
        color: `#fff`,
        zIndex: `1`,
        cursor: `pointer`
    }
    const rightArrowStyle = {
        position: `absolute`,
        top: `50%`,
        transform: `translate(0, -50%)`,
        left: `32px`,
        fontSize: `45px`,
        color: `#fff`,
        zIndex: `1`,
        cursor: `pointer`
    }
    function handelperivise() {
        const isfirstsile = curentinex === 0;
        const newindex = isfirstsile ? slides.length - 1 : curentinex - 1
        setcurrentindex(newindex)
    }
    function handelnext() {
        const islastsile = curentinex === slides.length - 1;
        const newindex = islastsile ? 0 : curentinex + 1
        setcurrentindex(newindex)
    }

    return (
        <div className="container" style={slidestyle} >
            <div style={leftArrowStyle} onClick={handelperivise} >{`>`}</div>
            <div style={rightArrowStyle} onClick={handelnext} >{`<`}</div>
            <div className="animate__animated animate__backInLeft" style={imageStyles} >

            </div>
        </div>
    );
}

export default ImageSlider;