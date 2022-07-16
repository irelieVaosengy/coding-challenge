import React, {useEffect, useState} from "react";
import './technologies-list.scss'
import ListItem from "../list-item/ListItem";
import {useDispatch} from "react-redux";
import {getTechnologyList} from "../../redux/apis/appApi";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectNinja, selectTechnologies} from "../../redux/selectors/appSelector";

const TechnologiesList = ({technologyTypes = [], awesomeNinja = {}}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        return populateTechnologiesData()
    }, [])

    const populateTechnologiesData = async () =>{
        await getTechnologyList(dispatch)
    }

    return <div className="technologies-list">
        {technologyTypes.map(technologyType => {
            const technologiesList = technologyType.children

            return <div className="technologies-list_type" key={technologyType.id}>
                <h3 className="technologies-list_type-title">{technologyType.name}</h3>
                {technologiesList.map(technology => (
                    <ListItem key={technology.id}
                              data={technology}
                              isAwesomeNinja={awesomeNinja.id === technology.id}
                    />
                ))}
            </div>
        })}
    </div>
}

const mapStateToProps = createStructuredSelector ({
    technologyTypes : selectTechnologies,
    awesomeNinja: selectNinja
});

export default connect(mapStateToProps)(TechnologiesList) ;
