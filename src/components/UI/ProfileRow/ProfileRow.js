import React from 'react'

export default function ProfileRow({labelName,data}) {
  return (
    <div>
      <b>{labelName}</b>: {data}
    </div>
  )
}
