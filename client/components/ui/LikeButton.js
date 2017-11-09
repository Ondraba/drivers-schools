import React from 'react'

// icons
import MdThumpUp from 'react-icons/lib/md/thumb-up'

export default ({ likes, onClick }) => (
  <div>
    <span>{likes}</span>
    <span 
      title="Like" 
      onClick={onClick} 
      style={{ fontSize: 24, marginLeft: 5, cursor: 'pointer' }}
    >
      <MdThumpUp/>
    </span>
  </div>
)
