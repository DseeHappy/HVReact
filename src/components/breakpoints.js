import React from "react"
import facepaint from 'facepaint'

const breakpoints = facepaint([
    '@media(min-width: 320px)',
    '@media(min-width: 500px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1120px)'
  ])

export default breakpoints
