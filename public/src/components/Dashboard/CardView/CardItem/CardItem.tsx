import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import Ticket from '../../../../models/ticket.models'

interface CardItemPropType {
  data: Ticket
}

const cardItemStyle = {
  container: {
    width: '250px',
    height: '250px',
    border: '1px solid red',
    borderRadius: '10px'
  }
}

export default function CardItem({ data }: CardItemPropType) {
  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardMedia
        component="img"
        height="500"
        image="./card-image.jpg"
      />
      <CardContent>
        <Typography align="left" gutterBottom variant="h5" component="div">
          Ticket title
        </Typography>
        <Typography align="left" gutterBottom variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quasi accusamus? Voluptas dolorem error.
        </Typography>
        <Typography align="left" variant="subtitle2" >
          5/8/2022
        </Typography>
      </CardContent>
    </Card>
  )
}
