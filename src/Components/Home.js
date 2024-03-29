import React from 'react';
import '../Components/Home.css';
import Search from '../Components/Search';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';


const Home = () => {
    return (
            <div className="home">
                <div className="home_header">
                    <div className="home_headerLeft">
                      <Link to="/about">About</Link>
                      <Link to="/Store">Store</Link>
                    </div>

                    <div className="home_headerRight">
                        <Link to="/gmail">Gmail</Link>
                        <Link to="/images">Images</Link>
                        <AppsIcon/>
                        <Avatar/>
                    </div>
                </div>

                  <div className="home_body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                    <div className="home_inputContainer">
                      <Search />
                    </div>
                </div>
            </div>
             
            
    )
}

export default Home 
