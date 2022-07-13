import React from "react";
import './search-form.scss'

const SearchForm = ({onQueryChanges, placeHolder}) => {
    return <div className="search-form">
        <div className="search-form_input-group input-group">
            <input className="search-form_input form-control py-2 "
                   type="search"
                   onChange={onQueryChanges}
                   placeholder={placeHolder} />
            <span className="search-form_btn-wrapper input-group-append">
                <button className="search-form_btn btn btn-outline-secondary border-left-0 border"
                        type="button"
                        onClick={onQueryChanges} >
                 Search
                </button>
            </span>
        </div>
    </div>
}

export default SearchForm ;
