import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, toggleStar} = props
  const {id, name, date, isStarred} = eachAppointment

  const onClickToggleStar = () => {
    toggleStar(id)
  }

  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starSrc = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="description-container">
        <p className="appointment-name">{name}</p>
        <p className="format-date">{formatedDate}</p>
      </div>
      <button
        type="button"
        className="star-btn"
        onClick={onClickToggleStar}
        data-testid="star"
      >
        <img src={starSrc} alt="star" className="star-img" />
      </button>
    </li>
  )
}

export default AppointmentItem