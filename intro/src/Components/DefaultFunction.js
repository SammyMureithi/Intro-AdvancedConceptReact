import React from 'react'

function DefaultFunction(props) {
    const styles={
        backgroundColor: props.cardColor,
        height:props.height,
        width: props.width
        
    }
  return (
    <div style={styles}>
        
    </div>
  )
}
//we coult now give the default in case our user does not provide
DefaultFunction.defaultProps={
    cardColor: "Green",
        height:270,
        width: 170
}

export default DefaultFunction