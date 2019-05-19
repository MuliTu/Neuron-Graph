import React from 'react'

export default function Checkbox({onChange, value}) {
  return (<input  onChange={onChange} type='checkbox' value={value}/>)
}
