import React, { Component } from 'react'
export class DefaultClass extends Component {
    static defaultProps={
            cardColor: "purple",
            cardWidth:180,
            cardHeight:100
        }
    
  render() {
    const styles={
        backgroundColor: this.props.cardColor,
        height: this.props.cardHeight,
        width: this.props.cardWidth
    }
    return (
      <div style={styles}></div>
    )
  }
}

export default DefaultClass