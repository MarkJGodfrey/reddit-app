import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import { postsSelector, isLoadingSelector, hasErrorSelector, fetchPosts } from '../../app/postsSlice';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import Comment from '../Comment/Comment';
import './PostList.css';

const PostList = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('q');
    const resultType = searchParams.get('type');
    const posts = useSelector(postsSelector);
    const isLoading = useSelector(isLoadingSelector);
    const hasError = useSelector(hasErrorSelector);
    useEffect(()=>{
        dispatch(fetchPosts({searchTerm, resultType}));

    },[searchParams])
    const handlePostsClick = ()=>{
        setSearchParams({
            q: searchTerm,
            type: 'link',
            })
    }
    const handleCommentsClick = ()=>{
        setSearchParams({
            q: searchTerm,
            type: 'comment',
            })
    }
    if(isLoading){
        return (
            <>
                <div className='main_column'>
                    {searchTerm ? <div className='results_filter'>
                            <button className={resultType==='link'?'active_type_button':'type_button'}>Posts</button>
                            <button className={resultType==='comment'?'active_type_button':'type_button'}>Comments</button>
                        </div> : <div className='results_filter'></div>}
                    <div className='postlist'>
                        {[1,2,3,4,5,6,7,8,9,10].map((index)=><PostLoading key={index}/>)}
                    </div>
                </div>
            </>
        )
    } else{ 
        if(hasError){
            // return  <Navigate to='/error' />;
        } else {

            return (
                <div className='main_column'>
                    {searchTerm ? <div className='results_filter'>
                            <button onClick={handlePostsClick} className={resultType==='link'?'active_type_button':'type_button'}>Posts</button>
                            <button onClick={handleCommentsClick} className={resultType==='comment'?'active_type_button':'type_button'}>Comments</button>
                        </div> : <div className='results_filter'></div>}
                    <div className='postlist'>
                        {posts.map((post,index)=>{
                            if(resultType==='comment'){
                                return <div className='post_container' key={index}>
                                    <Link to={post.permalink}>
                                    <Comment
                                    subreddit={post.subreddit_name_prefixed}
                                    author={post.author}
                                    created={post.created_utc}
                                    body={post.body}
                                    upvotes={post.ups}
                                    />
                                    </Link>
                                    </div>
                            } else{
                                return <div className='post_container' key={index}>
                                    <Link to={post.permalink}>
                                    <Post
                                    subreddit={post.subreddit_name_prefixed}
                                    author={post.author}
                                    created={post.created_utc}
                                    title={post.title}
                                    thumbnail={post.thumbnail.replaceAll('&amp;','&')}
                                    upvotes={post.ups}
                                    numComments={post.num_comments}
                                    />
                                    </Link>
                                    </div>
                            }
                        })}
                    </div>
                </div>

            );
        }
    }
};
export default PostList;