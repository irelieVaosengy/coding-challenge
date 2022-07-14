import React, {useEffect, useState} from "react";
import './technologies-list.scss'
import ListItem from "../list-item/ListItem";

const TechnologiesList = ({awesomeNinja = {}}) => {
    const [technologyTypes, setTechnologyTypes] = useState([]);

    useEffect(() => {
        return populateTechnologiesData()
    }, [])

    const populateTechnologiesData = async () =>{
        const response = await fetch(`tlmninja/technologies`);
        const technologyTypes = await response.json();

        setTechnologyTypes(technologyTypes);
    }

    return <div className="technologies-list">
        {technologyTypes.map(technologyType => {
            const technologiesList = technologyType.children

            return <div className="technologies-list_type">
                <h3 className="technologies-list_type-title">{technologyType.name}</h3>
                {technologiesList.map(technology => (
                    <ListItem key={technology.id} data={technology} isAwesomeNinja={awesomeNinja.id === technology.id}/>
                ))}
            </div>
        })}
    </div>
}

export default TechnologiesList ;
