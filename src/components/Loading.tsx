import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loading:React.FC = () => {
  return (
    <div>
        <CircularProgress color='secondary'/>
    </div>
  )
}

export default Loading