import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Searchpage.css';
import Googlehook from '../Components/Googlehook';
import { useStatevalue } from '../Components/StateProvider';
import Search from '../Components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';




const Searchpage = () => {

    const [{ term }] = useStatevalue();
    const { data } = Googlehook(term);

    return (
        <div className="searchpage">
            <div className="searchpage_header">
                <Link to="/">
                    <img
                        className="searchpage_logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="" />
                </Link>
                <div className="searchpage_headerbody">
                    <Search hideButtons />
                   
                    <div className="searchpage_options">
                            <div className="searchpage_optionleft">
                                <div className="searchpage_option">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>
                                <div className="searchpage_option">
                                    <DescriptionIcon />
                                    <Link to="/news">News</Link>
                                </div>
                                <div className="searchpage_option">
                                    <ImageIcon />
                                    <Link to="/image">Images</Link>
                                </div>
                                <div className="searchpage_option">
                                    <LocalOfferIcon />
                                    <Link to="/shopping">Shopping</Link>
                                </div>
                                <div className="searchpage_option">
                                    <RoomIcon />
                                    <Link to="/maps">Maps</Link>
                                </div>
                                <div className="searchpage_option">
                                    <MoreVertIcon />
                                    <Link to="/more">More</Link>
                                </div>
                            </div>
                            <div className="searchpage_optionright">
                                <div className="searchpage_option">
                                    <Link to="/setting">Settings</Link>
                                </div>
                                <div className="searchpage_option">
                                    <Link to="/tool">Tools</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
               
            { true && (
                <div className="Searchpage_results">
                    <p className="Searchpage_resultcount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds ) for {term}
                    </p>
                </div>
            )}


            {data?.items.map(item => (
                <div className="Searchpage_results">
                    <a className="link" href={item.link}>
                         {item.displayLink}
                         <MoreVertIcon />
                         </a>
                    <a className="Searchpage_resulttitle" href={item.link}>
                        <h2>{item.title}</h2>
                    </a>
                    <p className="Searchpage_resultsnippet">{item.snippet}</p>
                </div>
            ))}
        </div>


    )
}

export default Searchpage
