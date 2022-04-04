import React from 'react'

const Header = ({approvers, quorum}) => {
  return (
    <header>
      <ul>
        <li>Approvers: {approvers}</li>
        <li>Quorum: {quorum}</li>
      </ul>
    </header>
  )
}

export default Header
