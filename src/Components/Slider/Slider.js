import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './slider.scss';
import sliderPicture1 from '../../img/pexels-cottonbro-7169848.jpg';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__desc">
                <h2 className="slider__title">Spaceflight news</h2>
                <p className="slider__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, fugiat?</p>
                <Router>
                    <Link className="slider__button-link primary-button" to="/launches">Read news</Link>
                </Router>
                <div className="slider__arrow arrow-prev">--</div>
                <div className="slider__arrow arrow-next">--</div>
            </div>
            <div className="slider__picture">
                <img className="img-fluid rounded mx-auto d-block" src={sliderPicture1} alt="" />
            </div>
        </div>
    );
}

export default Slider;