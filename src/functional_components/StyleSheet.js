import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className=props.primary?'primary':'warning'
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default StyleSheet
