import React, { useEffect, useState } from 'react';
import { useNavigate, createSearchParams, Link, useSearchParams } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchParams] = useSearchParams();
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    useEffect(()=>{
      const initialSearchTerm = searchParams.get('q')?searchParams.get('q'):'';
      setCurrentSearchTerm(initialSearchTerm);
    },[searchParams])
    const navigate = useNavigate();

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