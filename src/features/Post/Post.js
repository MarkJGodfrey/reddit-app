import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, postsSelector, loadPosts } from '../../app/postsSlice';
import { getAgeString } from '../../utils/utils';

const Post = ({
    subreddit,
    author,
    created,
    title,
    thumbnail,}) => {

    return (
    <div>
     {`${subreddit} . posted by u/${author} ${getAgeString(created)} ago`}
        {/* <img src={preview.enabled}/> */}
    <img src={thumbnail}/>
    </div>
    )
};
export default Post;