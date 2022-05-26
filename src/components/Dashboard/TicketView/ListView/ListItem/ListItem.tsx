import React from 'react'
import './ListItem.css'

export default function ListItem() {
  return (
    <div className="line-item">
      <div className="line-item-indicator open"></div>
      <div className="line-item-content">
        <div className="line-item-content-1">
          <h2>Title One</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos impedit, et invento...</p>
        </div>
        <div className="line-item-content-2">
          <h3>02/09/2022</h3>
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
