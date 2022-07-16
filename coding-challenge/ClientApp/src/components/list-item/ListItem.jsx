import React from "react";
import ninja from '../../assets/images/ninja.png'
import './list-item.scss'

const ListItem = ({data, isAwesomeNinja}) => {
    const className = `list-item ${isAwesomeNinja ? 'list-item--awesome-ninja' : ''}`

    return <div className={className}>
        <img src={data.logo} className="list-item_image"/>
        <div className="list-item_details">
            <span className="list-item_h1">{data.name }</span>
            <span className="list-item_h2">Fréquence de téléchargement: {data.dailyDownloadNumber }</span>
            <span className="list-item_h3">Popularité: {data.popularityRange }</span>
        </div>
        {isAwesomeNinja ? <img src={ninja} className="list-item_image list-item_image-ninja"/> : ''}
    </div>
}

export default ListItem ;
