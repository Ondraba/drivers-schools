import React from 'react'

export default ({ label, onClick }) => (
  <div>
    <a href="#"
      onClick={onClick}>{label}</a>
    <style jsx>{`
      a {
        font-family: "Arial";
        text-decoration: none;
        padding: 20px 15px;
        border-radius: 4px;
        background-color: limegreen;
        color: white;
      }

      a:hover {
        cursor: hand;
      }
    `}</style>
  </div>
)
