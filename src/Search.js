import React, { useState } from 'react'
import './Search.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Search({ hideButtons = false }) {
    const [{ }, dispach] = useStateValue()



    const [input, setinput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        dispach({
            type: actionType.SET_SEARCH_TERM,
            term: input,
        })

        history.push('/search')


    }


    return (
        <form className='search' >
            <div className="search__input">
                <SearchRoundedIcon />
                <input
                    placeholder='Search here'
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
                <MicRoundedIcon />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type='submit' onClick={search} variant='outlined' >Google Search</Button>
                    <Button variant='outlined' >Feeling Lucky</Button>
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button className='search__buttonhidden' type='submit' onClick={search} variant='outlined' >Google Search</Button>
                        <Button className='search__buttonhidden' variant='outlined' >Feeling Lucky</Button>
                    </div>
                )}

        </form>
    )
}

export default Search
