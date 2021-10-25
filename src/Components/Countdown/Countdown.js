import React, { useEffect, useState } from "react";
import axios from "axios";
import './countdown.scss';

const Countdown = () => {
    let countdownDate = new Date();
    axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=1`).then(res => {
        countdownDate = new Date(res.data.results[0].net);
    });


    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        let timeleft = {};

        if (distance > 0) {
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timeleft = {
                days: (days < 10) ? '0' + days : days,
                hours: (hours < 10) ? '0' + hours : hours,
                minutes: (minutes < 10) ? '0' + minutes : minutes,
                seconds: (seconds < 10) ? '0' + seconds : seconds
            };
        }

        return timeleft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    const timerComponents = [];
    let i=0;

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span key={i}>
                {timeLeft[interval]}
                {(interval === Object.keys(timeLeft)[Object.keys(timeLeft).length - 1]) ? "" : ":"}
            </span>
        );
        i++;
    });

    return (
        <div className="countdown">
            <div className="countdown__title">Time until next launch</div>
            <div className="countdown__timer">
                <div>
                    {timerComponents.length ? timerComponents : <span>Loading...</span>}
                </div>
            </div>
        </div>
    );
}

export default Countdown;