import React from 'react'
import moment from 'moment'

import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const Notifications = ({notifications}) => {
  return (
    <div className="notifications">
      <Paper>
        <CardContent>
          <Typography variant="h4" component="h2">
            Notifications
          </Typography>
          <ul>
            { notifications && notifications.map(notification => {
                return(                
                    <li key={notification.id}>
                      <Typography variant="h6" component="h5">{notification.user} {notification.content}</Typography>
                      <span>{moment(notification.time.toDate()).fromNow()}</span>
                    </li>
                )
              })  }
          </ul>
        </CardContent>
      </Paper>
    </div>
  )
}

export default Notifications