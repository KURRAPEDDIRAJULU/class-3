import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentDetails,
    //containerBackgroundClassNames,
    toggleisLiked,
    onDeleteElement,
  } = props
  const {
    id,
    firstLetter,
    name,
    comment,
    isLiked,
    initialCLassName,
  } = commentDetails

  const onClickLikeBtn = () => {
    toggleisLiked(id)
  }

  const onClickDeleteBtn = () => {
    onDeleteElement(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-list-items-container">
      <div className="name-container">
        <span className={initialCLassName}>{firstLetter}</span>
        <p className="user-name">{name}</p>
        <p className="comment-time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="user-comment-description">{comment}</p>
      <div className="images-container">
        <div className="like-container">
          <button
            type="button"
            className="button-icons"
            onClick={onClickLikeBtn}
          >
            <img src={likeImg} alt="like" className="like-img" />
          </button>
          <p className="like-text">Like</p>
        </div>
        <button
          type="button"
          className="button-icons"
          data-testid="delete"
          onClick={onClickDeleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem