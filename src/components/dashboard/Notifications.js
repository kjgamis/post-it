import React from 'react'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Notifications = ({notifications}) => {
  return (
    <div className="notifications">
      {notifications && notifications.map(notification => {
        return(
          <Paper className="paper" key={notification.id}>
            <Typography gutterBottom variant="h5" component="h5">
            {notification.content}
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="textSecondary">
             {notification.user}
           </Typography>
          </Paper>
        )
      })}      
    </div>
  )
}

export default Notifications