import React from "react";
import "./Card.css";
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlineUpload } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';

function Card({items}) {
  const {description,name,postImage,profileImage}=items
  return (
    <div className="card">
      <img src={profileImage} alt="Avatar" />
      <div className="wrap-tweet">
        <p className="tweet-text"><b>{name}</b></p>
        <p className="tweet-text">
          {description}
        </p>
        { postImage && 
          <div className="post-image">
            <img src={postImage} alt={name}/>
          </div>
        }


        <div className="tweet-icon">
            <FiMessageCircle/>
            <AiOutlineUpload/>
            <AiOutlineHeart/>
            <FaRetweet/>
      </div>
      </div>
      
    </div>
  );
}

export default Card;
