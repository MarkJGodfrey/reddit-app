import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, loadPosts, searchTermSelector } from '../../app/postsSlice';

const Header = () => {
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const searchTerm = useSelector(searchTermSelector);
    const dispatch = useDispatch();
  
    useEffect(() => {
        setCurrentSearchTerm(searchTerm);
      }, [searchTerm]);

    const handleSearchTermChange = (e) => {
      setCurrentSearchTerm(e.target.value);
    };
  
    const handleSearch = (e) => {
        if(currentSearchTerm){
            e.preventDefault();
            dispatch(changeSearchTerm(currentSearchTerm));
            loadPosts(searchTerm);
        }
    };

    return (
        <header>
          <div className="logo">
            <p>
              Reddit<span>Lite</span>
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
              SEARCH
            </button>
          </form>
        </header>
      );
};
export default Header;