import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, fetchPosts, searchTermSelector,postsSlice } from '../../app/postsSlice';
import './Header.css';
//import { fetchPosts } from '../../utils/utils';

const Header = () => {
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const searchTerm = useSelector(searchTermSelector);
    const dispatch = useDispatch();
  
    // useEffect(() => {
    //     setCurrentSearchTerm(searchTerm);
    //   }, [searchTerm]);

    const handleSearchTermChange = (e) => {
      setCurrentSearchTerm(e.target.value);
    };
  
    const handleSearch = async (e) => {
        e.preventDefault();
        if(currentSearchTerm){
          dispatch(changeSearchTerm(currentSearchTerm));
          dispatch(fetchPosts(currentSearchTerm));
        }
    };

    return (
        <header>
          <div className="logo">
          <img src={require('../../resources/images/redditliteLogo.png')} alt='redditlite Logo'/>
            <p>
              reddit<span>Lite</span>
            </p>
          </div>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={currentSearchTerm}
              onChange={handleSearchTermChange}
              aria-label="Search posts"
            />
            <button type="submit" onClick={handleSearch} aria-label="Search">
            <i className="fa fa-search"></i>
            </button>
          </form>
        </header>
      );
};
export default Header;