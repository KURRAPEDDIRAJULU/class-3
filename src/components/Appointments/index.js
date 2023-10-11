import React, {useState} from 'react'
// import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

const Appointments=()=> {
    const [nameInput,setNameInput]=useState('');
    const [dateInput,setDateInput]=useState('');
    const [appointmentsList,setAppointmentsList]=useState([]);


    const onClickStarredAppointments = () => {    
        const filteredList = appointmentsList.filter(eachAppointment => {
          if (eachAppointment.isStarred === true) {
            return true
          }
          return false
        })
         setAppointmentsList(filteredList)
        
      }

  const onSubmitAddAppointment = event => {
    event.preventDefault()

    const newAppointment = {
      id: uuidv4(),
      name: nameInput,
      date: dateInput,
      isStarred: false,
    }
    //console.log(newAppointment.date)

    setAppointmentsList([...appointmentsList, newAppointment])
    setNameInput('')
    setDateInput('')
    
  }

  const toggleStar = appointmentId => {
    setAppointmentsList(appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === appointmentId) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }))

    
  }

 const onChangeNameInput = event => {
    setNameInput(event.target.value)

  }

 const onChangeDateInput = event => {
    setDateInput(event.target.value)
    
  }




    return (
      <div className="app-container-1">
        <div className="add-appointment-container">
          <h1 className="add-appointment-heading">Add Appointment</h1>
          <div className="form-img-container">
            <form
              className="form-container"
              onSubmit={onSubmitAddAppointment}
            >
              <label htmlFor="titleInput" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                id="titleInput"
                className="form-input-text"
                placeholder="Title"
                value={nameInput}
                onChange={onChangeNameInput}
              />
              <label htmlFor="dateInput" className="label-text">
                DATE
              </label>
              <input
                type="date"
                id="dateInput"
                className="form-input-date"
                value={dateInput}
                onChange={onChangeDateInput}
                
              />
              <button type="submit" className="form-add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="appointment-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={onClickStarredAppointments}
            
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                key={eachAppointment.id}
                toggleStar={toggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
//   }
}

export default Appointments