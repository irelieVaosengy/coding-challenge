import React, {useEffect, useState} from "react";
import SearchForm from "../search-form/SearchForm";
import './technology-search.scss'
import TechnologiesList from "../technologies-list/TechnologiesList ";

const TechnologySearch = () => {
    const [query, setQuery] = useState('');
    const [awesomeNinja, setAwesomeNinja] = useState([]);
    const INPUT_PLACEHOLDER = 'Enter technology name'

    useEffect(() => {
        return getAwesomeNinjaData()
    }, [query])

    const getAwesomeNinjaData = async () =>{
        const response = await fetch(`tlmninja/ninjify?x=${query}`);
        const ninja = await response.json();
        console.log(ninja)
        setAwesomeNinja(ninja);
    }

    const updateQueryParams = (event) => {
        setQuery(event.target.value)
    }

    return <div className="technology-search">
        <SearchForm
            className="technology-search_search-form"
            onQueryChanges={updateQueryParams}
            placeHolder={INPUT_PLACEHOLDER}/>
        <TechnologiesList></TechnologiesList>
    </div>
}

export default TechnologySearch ;
