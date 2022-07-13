import React, {useEffect, useState} from "react";
import SearchForm from "../search-form/SearchForm";
import NinjaCard from "../ninja-card/NinjaCard";
import './technology-search.scss'

const TechnologySearch = () => {
    const [query, setQuery] = useState('');
    const [technologies, setTechnologies] = useState([]);
    const INPUT_PLACEHOLDER = 'Enter technology name'

    useEffect(() => {
        return populateTechnologiesData()
    }, [query])

    const populateTechnologiesData = async () =>{
        const response = await fetch(`tlmninja/ninjify?summary=${query}`);
        const data = await response.json();
        console.log(data)
        setTechnologies(data);
    }

    const updateQueryParams = (event) => {
        setQuery(event.target.value)
    }

    return <div className="technology-search">
        <SearchForm
            className="technology-search_search-form"
            onQueryChanges={updateQueryParams}
            placeHolder={INPUT_PLACEHOLDER}/>
        {technologies.map(item => (
            <NinjaCard key={item.date} ninjaData={item} />
        ))}
    </div>
}

export default TechnologySearch ;
