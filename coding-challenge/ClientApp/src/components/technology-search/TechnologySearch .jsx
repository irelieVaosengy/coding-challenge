import React from "react";
import SearchForm from "../search-form/SearchForm";
import './technology-search.scss'
import TechnologiesList from "../technologies-list/TechnologiesList ";

const TechnologySearch = () => {
    const INPUT_PLACEHOLDER = 'Enter technology name'

    return <div className="technology-search">
        <SearchForm
            className="technology-search_search-form"
            placeHolder={INPUT_PLACEHOLDER}/>
        <TechnologiesList></TechnologiesList>
    </div>
}

export default TechnologySearch ;
