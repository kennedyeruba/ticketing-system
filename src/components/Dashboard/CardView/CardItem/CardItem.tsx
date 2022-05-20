import { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import Ticket from '../../../../models/ticket.models'
import './CardItem.css'

interface CardItemPropType {
  data: Ticket
}

// const cardItemStyle = {
//   container: {
//     width: '250px',
//     height: '250px',
//     border: '1px solid red',
//     borderRadius: '10px'
//   }
// }

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
        <h3>02/09/2022</h3>
        <h2>Title One</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos impedit, et invento...</p>
        <select onChange={handleOnChange}>
          <option value="open">Open</option>
          <option value="blocked">Blocked</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
    // <Card sx={{ maxWidth: 270 }}>
    //   <CardMedia
    //     component="img"
    //     height="500"
    //     image="./card-image.jpg"
    //   />
    //   <CardContent>
    //     <Typography align="left" gutterBottom variant="h5" component="div">
    //       Ticket title
    //     </Typography>
    //     <Typography align="left" gutterBottom variant="body2" color="text.secondary">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quasi accusamus? Voluptas dolorem error.
    //     </Typography>
    //     <Typography align="left" variant="subtitle2" >
    //       5/8/2022
    //     </Typography>
    //   </CardContent>
    // </Card>
  )
}
