import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

const PostDetails = (props) => {
  return (
    <div className="post-details container section">
        <Typography gutterBottom variant="h4" component="h2">
          Post Text - {props.match.params.id}
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde voluptas quos, voluptate vero magnam perferendis sequi dolorem asperiores, consequatur deserunt corporis iusto animi odit officiis cupiditate, eius hic tempora.
        </Typography>
        <CardActions>
          <CardActionArea>
            <Typography variant="subtitle1" gutterBottom>Posted by KJG</Typography>
            <Typography variant="subtitle1" gutterBottom color="textSecondary">
              March16/19
            </Typography>
          </CardActionArea>
        </CardActions>
    </div>
    )
  }

export default PostDetails