import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, postsSelector, loadPosts } from '../../app/postsSlice';

const Header = () => {
    const posts = useSelector(postsSelector);
    return (

    );
};