import { useEffect, useState } from 'react'
import moment from 'moment';
import { Divider } from '@mui/material'
import Ticket from '../../../../../models/ticket.model'
import './CardItem.css'
import { Delete as DeleteIcon } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import useTickingSystemStore from '../../../../../store/useTicketingSystemStore'

interface CardItemPropType {
  data: Ticket
}

export default function CardItem({ data }: CardItemPropType) {
  const [status, setStatus] = useState('')
  const [assignee, setAssignee] = useState('')
  const [ticket, setTicket] = useState('')
  const ticketingSystemStore = useTickingSystemStore

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
    const modifiedTicket = {...data, status: event.target.value} as Ticket
    ticketingSystemStore.getState().updateTicket(modifiedTicket)
  }

  useEffect(() => {
   setStatus('open')
  }, [])

  const deleteTicket = () => {
    ticketingSystemStore.getState().deleteTicket(data.id as string)
  }

  const editTicket = () => {
    ticketingSystemStore.getState().toggleTicketDialog(true, data)
  }

  const renderStatusSelect = () => {
    
    if(data.status === "BLOCKED") {
      return (
        <>
          <option value="BLOCKED">Blocked</option>
          <option value="OPEN">Open</option>
          <option value="CLOSED">Closed</option>
        </>
      )
    }
    if(data.status === "CLOSED") {
      return (
        <>
        <option value="CLOSED">Closed</option>
        <option value="OPEN">Open</option>
        <option value="BLOCKED">Blocked</option>
      </>
      )
    }
    if(data.status === "OPEN"){
      return (
        <>
          <option value="OPEN">Open</option>
          <option value="BLOCKED">Blocked</option>
          <option value="CLOSED">Closed</option>
        </>
      )
    }
  }

  return (
    <div className="card">
      <div className={`card-indicator ${data.status?.toLowerCase()}`}></div>
      <h3>{ moment(data.creationDate).format('MMMM Do YYYY, h:mm:ss a') }</h3>
      <div className="card-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="lower-section">
          <div className="info">
            <Avatar sx={{ bgcolor: "#1976d2", width: '30px', height: '30px', fontSize: '.9rem' }}>{
              `${data.assignee?.firstName?.slice(0, 1)}${data.assignee?.lastName?.slice(0, 1)}`
            }</Avatar>
            <select value={data.status} onChange={handleOnChange}>
              {
                renderStatusSelect()
              }
            </select>
          </div>
          <div className="icons">
            <IconButton color="primary" onClick={editTicket}>
              <EditIcon />
            </IconButton>
            <IconButton color="primary" onClick={deleteTicket}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
