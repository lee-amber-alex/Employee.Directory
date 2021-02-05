import React from 'react'


const styles = {
  headerTitle: {
    textAlign: "center"
  }
};
export default function Header(props) {
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container" style={styles.headerTitle}>
    {props.children}
  </div>
</div>
      
    )
}

