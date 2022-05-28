import { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import Ticket from '../../../../../models/ticket.model'
import './CardItem.css'

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
      <div className="card-content">
        <h3>{`${data.creationDate?.split('T')[0]}\n${data.creationDate?.split('T')[1]}` }</h3>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <select onChange={handleOnChange}>
          <option value="open">Open</option>
          <option value="blocked">Blocked</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
  )
}
