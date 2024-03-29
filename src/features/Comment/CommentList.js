import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { commentsSelector, isLoadingSelector, hasErrorSelector, fetchComments } from '../../app/commentsSlice';
import { getAgeString } from '../../utils/utils';
import Comment from './Comment';
import './CommentList.css';

const CommentList = () => {
    const [imageDisplayed, setImageDisplayed] = useState(0);
    const dispatch = useDispatch();
    const { subreddit, id, title } = useParams();
    useEffect(()=>{
        dispatch(fetchComments(`${subreddit}/comments/${id}/${title}/`));

    },[subreddit, id, title, dispatch])
    const comments = useSelector(commentsSelector);
    const isLoading = useSelector(isLoadingSelector);
    const hasError = useSelector(hasErrorSelector);

    if(isLoading){
        return (
            <>
                <div className='banner'>r/{subreddit}</div>
                <div className='post_column'>
                    <div className='postPageLoading'>
                        <div className='name-age animated-background'></div>
                        <div className='titleLoading animated-background'></div>
                        <div className='postPageImage animated-background'></div>
                        <div className='comments-upvotes animated-background'></div>
                    </div>
                </div>
            </>
        )
        
    } else{ 
        if(hasError){
            return  <Navigate to='/error' />;
        } else {

            const mediaMetadata = comments[0].data.children[0].data.media_metadata;
            const galleryData = comments[0].data.children[0].data.gallery_data.items;
            const numComments = comments[0].data.children[0].data.num_comments;
            const subreddit2 = comments[0].data.children[0].data.subreddit_name_prefixed;
            const upvotes = comments[0].data.children[0].data.ups;
            const created = comments[0].data.children[0].data.created_utc;
            const author = comments[0].data.children[0].data.author;
            const title = comments[0].data.children[0].data.title;
            const body = comments[0].data.children[0].data.selftext;
            let imgs = [];
            if(mediaMetadata){
                imgs = galleryData.map((image)=>mediaMetadata[image.media_id].s.u);

            }
            const handleIncrementImage = () => {
                setImageDisplayed((imageDisplayed+1) % imgs.length)
            }
            const handleDecrementImage = () => {
                setImageDisplayed((imageDisplayed+imgs.length-1) % imgs.length)
            }
            return (
                <>
                    <div className='banner'>{subreddit2}</div>
                    <div className='post_column'>
                        <div className='post_big'>
                            {`posted by u/${author} ${getAgeString(created)} ago`}
                            <h2>{title}</h2>
                            { imgs.length>0 ?
                            <figure>
                                <div className='imageCounterContainer'>
                                    <div className='imageCounter'>{imageDisplayed+1} of {imgs.length}</div>
                                </div>
                                <img src={imgs[imageDisplayed]} alt={`${imageDisplayed+1} of ${imgs.length}`}/>
                                <div className='changeImageContainer'>
                                    <button className='decrementImage' onClick={handleDecrementImage}><i className="fa fa-arrow-left"></i></button>
                                    <button className='incrementImage' onClick={handleIncrementImage}><i className="fa fa-arrow-right"></i></button>
                                </div>
                            </figure> : <div></div>}

                            <p className='body'>{body}</p>
                            <p className='upvotes'>{upvotes} upvotes &nbsp; {numComments} comments</p>
                        </div>
                        <div className='commentList'>
                            {comments[1].data.children.map((comment,index)=>{
                                if(comment.kind==='t1'){
                                    return <Comment
                                            author={comment.data.author}
                                            created={comment.data.created_utc}
                                            body={comment.data.body}
                                            upvotes={comment.data.ups}
                                            replies={comment.data.replies}
                                            key={index}
                                            />
                                } else{return null}
                            })}
                        </div>
                    </div>
                </>


            );
        };
    }
};
export default CommentList;