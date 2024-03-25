import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, postsSelector, loadPosts } from '../../app/postsSlice';
import { getAgeString } from '../../utils/utils';
import './Post.css';

const Post = ({
    subreddit,
    author,
    created,
    title,
    thumbnail,
    upvotes,
    numComments,
    }) => {

    return (
    <div className='post'>
        {`${subreddit} . posted by u/${author} ${getAgeString(created)} ago`}
        <div className='titlepic'>
            <h2>{title}</h2>
            <figure>
            {thumbnail==='default'? <></> : <img src={thumbnail}/>}
            </figure>
        </div>
        <p className='upvotes'>{upvotes} upvotes &nbsp; {numComments} comments</p>
    </div>
    )
};
export default Post;