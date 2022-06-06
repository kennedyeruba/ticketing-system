import { useEffect, useState } from 'react'
import moment from 'moment';
import { Divider } from '@mui/material'
import Ticket from '../../../../../models/ticket.model'
import './CardItem.css'
import { Delete as DeleteIcon } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

interface CardItemPropType {
  data: Ticket
}

export default function CardItem({ data }: CardItemPropType) {
  const [status, setStatus] = useState('')
  const [assignee, setAssignee] = useState('')
  const [ticket, setTicket] = useState('')

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
  }

  useEffect(() => {
   setStatus('open')
  }, [])

  return (
    <div className="card">
      <div className={`card-indicator ${status}`}></div>
      <h3>{ moment(data.creationDate).format('MMMM Do YYYY, h:mm:ss a') }</h3>
      <div className="card-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="lower-section">
          <div className="info">
            <Avatar sx={{ bgcolor: "#1976d2", width: '30px', height: '30px', fontSize: '.9rem' }}>{
              `${data.assignee?.firstName.slice(0, 1)}${data.assignee?.lastName.slice(0, 1)}`
            }</Avatar>
            <select onChange={handleOnChange}>
              <option value="open">Open</option>
              <option value="blocked">Blocked</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="icons">
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="primary">
              <DeleteIcon />
            </IconButton>
            
          </div>
        </div>
      </div>
    </div>
  )
}
