import React, {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

function Comments () {

    const [name,setName]=useState('');
    const [comment,setComment]=useState('');
    const [commentsList,setCommentsList]=useState([]);


  const onChangeInputName = event => {
    setName(event.target.value)
  }
  const onChangeCommentText = event => {
    setComment(event.target.value)
  }

  const addComment = event => {
    event.preventDefault()

    const backgroundClassNames = `first-letter ${
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    }`

    const newComment = {
      id: uuidv4(),
      firstLetter: name[0],
      name,
      comment,
      initialCLassName: backgroundClassNames,
      isLiked: false,
      isDeleted: false,
    }
    setCommentsList([...commentsList, newComment])
    setName('')
    setComment('')
  }

  const toggleisLiked = id => {
    
      setCommentsList(commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      
    }))

  }

  const onDeleteElement = id => {
      setCommentsList(commentsList.filter(
        eachComment => id !== eachComment.id,
      ))
  }

    return (
      <div className="app-container-2">
        <div className="comment-container">
          <h1 className="main-heading">Comments</h1>
          <div className="order-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
            <form className="form-container">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="comment-input"
                placeholder="Your Name"
                onChange={onChangeInputName}
                value={name}
              />
              <textarea
                className="comment-text"
                placeholder="Your Comment"
                onChange={onChangeCommentText}
                value={comment}
              />
              <button
                type="button"
                className="add-comment-btn"
                onClick={addComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <hr className='horizontal-line' />
          <ul className="comment-list-container">
            <div className="comment-counter-container">
              <span className="comment-counter">{commentsList.length}</span>
              <p className="comment-counter-text">Comments</p>
            </div>
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                toggleisLiked={toggleisLiked}
                onDeleteElement={onDeleteElement}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
//   }
}

export default Comments