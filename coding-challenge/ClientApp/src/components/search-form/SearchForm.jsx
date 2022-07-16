import React, {useState} from "react";
import './search-form.scss'
import {useDispatch} from "react-redux";
import {getNinjaData} from "../../redux/apis/appApi";

const SearchForm = ({placeHolder}) => {
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const onSearchBtnClick = () => {
        if(query) {
            getNinjaData(dispatch, query).then((response) => {
                if(typeof response === 'string') {
                    setErrorMessage(response)
                } else {
                    setErrorMessage('')
                }
            })
        }
    }

    const updateQueryParams = (event) => {
        setQuery(event.target.value)
    }
    return <div className="search-form">
        <div className="search-form_input-group input-group">
            <input className="search-form_input form-control py-2 "
                   type="search"
                   onChange={updateQueryParams}
                   placeholder={placeHolder} />
            <span className="search-form_btn-wrapper input-group-append">
                <button className="search-form_btn btn btn-outline-secondary border-left-0 border"
                        type="button"
                        onClick={onSearchBtnClick} >
                 Search
                </button>
            </span>
        </div>
        {
            errorMessage ? <div className="search-form_error-message alert alert-danger alert-dismissible">
                <strong>Error!</strong> {errorMessage}.
            </div> : ''
        }
    </div>
}

export default SearchForm ;
