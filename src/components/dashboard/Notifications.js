import React from 'react'

import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const Notifications = (props) => {
  return (
    <div className="notifications">
      <Paper>
        <CardContent>
          <Typography variant="h4" component="h2">
            Notifications
          </Typography>
          <ul>
            <li>Notification</li>
          </ul>
        </CardContent>
      </Paper>
    </div>
  )
}

export default Notifications