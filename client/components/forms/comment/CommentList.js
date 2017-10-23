import React from 'react'

export default ({ comments }) => {
  return (
    <div>
      {comments.map(({ _id, username, content, createdAt }) => (
        <div key={_id}>
          <h3>{username}</h3>
          <p style={{ marginTop: 0 }}><em>{createdAt}</em></p>
          <p style={{ marginTop: 0 }}>{content}</p>
        </div>
      ))}
    </div> 
  )    
}
