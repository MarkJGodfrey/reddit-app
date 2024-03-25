import React from 'react';
import './PostLoading.css';

export default function PostLoading(){

    return (
        <div className='postLoading'>
            <div className='name-age animated-background'></div>
            <div className='title-pic'>
                <div className='title animated-background'></div>
                <div className='image animated-background'></div>
            </div>
            <div className='comments-upvotes animated-background'></div>
        </div>
    )
};