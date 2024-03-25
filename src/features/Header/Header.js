import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../../app/postsSlice';
import { useNavigate, createSearchParams, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(() => {
    //     setCurrentSearchTerm(searchTerm);
    //   }, [searchTerm]);

    const handleSearchTermChange = (e) => {
      setCurrentSearchTerm(e.target.value);
    };
  
    const handleSearch = async (e) => {
        e.preventDefault();
        if(currentSearchTerm){
          const searchQuery = {q: currentSearchTerm, type: 'link'};
          const query = createSearchParams(searchQuery);
          navigate(`/search?${query}`);
        }
    };

    return (
        <header>
          <Link to={'/'}>
          <div className="logo">
          <img src={require('../../resources/images/redditliteLogo.png')} alt='redditlite Logo'/>
            <p>
              reddit<span>Lite</span>
            </p>
          </div>
          </Link>
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