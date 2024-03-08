import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, postsSelector, loadPosts } from '../../app/postsSlice';
import Post from '../Post/Post';

const PostList = () => {
    const posts = useSelector(postsSelector);
    return (
        <>
            {posts.map((post,index)=><Post
                                        subreddit={post.subreddit_name_prefixed}
                                        author={post.author}
                                        created={post.created_utc}
                                        title={post.title}
                                        thumbnail={post.thumbnail}
                                        key={index}
                                        />)}
        </>
    );
};
export default PostList;