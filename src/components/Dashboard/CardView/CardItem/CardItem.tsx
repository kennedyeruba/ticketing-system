import React from 'react'
import Ticket from '../../../../models/ticket.models'

interface CardItemPropType {
  data: Ticket
}

export default function CardItem({ data }: CardItemPropType) {
  return (
    <h1>{ data.title }</h1>
  )
}
