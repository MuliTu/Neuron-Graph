import React from 'react'
import './style.scss'
const FloatCard = (props) => {
  return (
    <div className={'card'} style={{top:props.top +20 , left:props.left}}>
      {props.children}
    </div>
  )
}
export default FloatCard
