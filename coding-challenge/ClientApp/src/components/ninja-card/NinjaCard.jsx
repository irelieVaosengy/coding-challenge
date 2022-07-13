import React from "react";
import ninja from '../../assets/images/ninja.png'
import './ninja-card.scss'

const NinjaCard = ({ninjaData}) => {
    return <div className="ninja-card">
        <img src={ninja} className="ninja-card_image"/>
        <div className="ninja-card_details">
            <span className="ninja-card_name">{ninjaData.summary }</span>
            <span className="ninja-card_daily-frequency">{ninjaData.dailyDownloadFrequency }</span>
            <span className="ninja-card_daily-popularity-range">{ninjaData.popularityRange }</span>
        </div>
    </div>
}

export default NinjaCard ;
