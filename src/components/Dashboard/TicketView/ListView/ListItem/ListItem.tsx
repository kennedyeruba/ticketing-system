import React from 'react'
import './ListItem.css'
import Ticket from '../../../../../models/ticket.model'

interface ListItemPropType {
  data: Ticket
}

export default function ListItem({ data }: ListItemPropType) {
  return (
    <div className="line-item">
      <div className="line-item-indicator open"></div>
      <div className="line-item-content">
        <div className="line-item-content-1">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="line-item-content-2">
          <h3>{data.creationDate}</h3>
          <select>
            <option value="open">Open</option>
            <option value="blocked">Blocked</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>
    </div>
  )
}
