import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './response'
import { Link } from 'react-router-dom';
import Search from './Search';
import { SearchRounded } from '@material-ui/icons';
import AnnouncementRounded from '@material-ui/icons/Announcement';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomRounded from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term }, dispach] = useStateValue();
    const { data } = useGoogleSearch(term);
    // const data = Response;


    console.log(data);
    return (
        <div className='search__page' >
            <div className="search__pageheader">
                <Link to='/' >
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
                        alt=""
                        className="searchpage__logo"
                    />
                </Link>
                <div className="searchpage__headerbody">
                    <Search hideButtons />
                    <div className="searchpage__options">
                        <div className="searchpage__optionsleft">
                            <div className="searchpage__option">
                                <SearchRounded />
                                <Link to="/all" >All</Link>
                            </div>
                            <div className="searchpage__option">
                                <AnnouncementRounded />
                                <Link to="/news" >News</Link>
                            </div>
                            <div className="searchpage__option">
                                <ImageIcon />
                                <Link to="/images" >Images</Link>
                            </div>
                            <div className="searchpage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping" >Shopping</Link>
                            </div>
                            <div className="searchpage__option">
                                <RoomRounded />
                                <Link to="/maps" >Maps</Link>
                            </div>
                            <div className="searchpage__option">
                                <MoreVertIcon />
                                <Link to="/more" >More</Link>
                            </div>

                        </div>
                        <div className="searchpage__optionsright">
                            <div className="searchpage__option">
                                <Link to="/settings" >Settings</Link>
                            </div>
                            <div className="searchpage__option">
                                <Link to="/tools" >Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {term && (
                <div className="search__pageresults">
                    <p className='searchpage__resultcount' >
                        About {data?.searchInformation.formattedTotalResults} results in {data?.searchInformation.formattedSearchTime} seconds for {term}
                    </p>{
                    data?.items.map(item => (
                    <div className='result' >
                        <a href={item.link}>{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img className='result__image' src={item.pagemap?.cse_image[0]?.src} alt=""/>
                        )}{item.displayLink}</a>
                        <a href={item.link} className='result__title' ><h3>{item.title}</h3></a>
                        <p className='result__snippet' >{item.snippet}</p>
                    </div>
                    
                ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage;
