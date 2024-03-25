import React, { useState, useEffect } from 'react';
import { getAgeString } from '../../utils/utils';
import './Comment.css';

const Comment = ({
    author,
    created,
    body,
    upvotes,
    replies,
    }) => {

    return (
    <div className='comment'>
        <div className='user'>
        <img src={require('../../resources/images/redditliteLogo.png')} alt='redditlite Logo'/>
            <p className='name'>{author} . <span>{getAgeString(created)} ago</span></p>
        </div>
        <div className='indented'>
            <p className='body'>{body}</p>
            <p className='upvotes'>{upvotes} upvotes</p>
            <div>
            {typeof(replies)==='object' ? replies.data.children.map((reply,index)=>{
                if(reply.kind==='t1'){
                    return <Comment
                            author={reply.data.author}
                            created={reply.data.created_utc}
                            body={reply.data.body}
                            upvotes={reply.data.ups}
                            replies={reply.data.replies}
                            key={index}
                            />}}) : <></>
            }
            </div>

        </div>
    </div>
    )
};
export default Comment;