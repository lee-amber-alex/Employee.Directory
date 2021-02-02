import React from 'react'



export default function Header(props) {
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    {props.children}
  </div>
</div>
      
    )
}

