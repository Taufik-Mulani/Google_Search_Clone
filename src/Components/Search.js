import React , {useState } from 'react'
import '../Components/Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStatevalue } from '../Components/StateProvider';
import { actionTypes } from '../Components/Reducer';

const Search = ({ hideButtons = false}) => {
    const [term,dispatch] = useStatevalue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input 
        })

        history.push('/search')
    }  

    return (
        <form className="search">

            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input value={input} onChange={ e => setInput( e.target.value)}/>
                <MicIcon/>
            </div>

             {!hideButtons ? (
                 <div className="search_button">
                     <Button type="submit" onClick={search} variant ="outlined">Google Search</Button>
                     <Button variant = "outlined">Created by Sultan</Button>                
                 </div>
             ) :
                    <div className="search_button">
                        <Button className="search_buttonHidden" type="submit" onClick={search} variant ="outlined">Google Search</Button>
                        <Button className="search_buttonHidden" variant = "outlined">Created by Sultan</Button>                
                    </div>
             }   
           

        </form>
    )
}

export default Search ;
