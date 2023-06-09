
import React from 'react'

export default function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <button style={{
        position: 'relative',
        bottom: '400',
      color: 'blue',
      background: 'blue',
      }}>
        <a href="http://localhost/orangehrm-5.3/web/index.php/auth/login">
          dashboard
        </a>
      </button>
    </div>
  )
}





