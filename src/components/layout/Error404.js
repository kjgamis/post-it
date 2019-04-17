import React from 'react'

import Typography from '@material-ui/core/Typography';

const Error404 = () => {
    return (
        <div className="error center red-text">
            <Typography variant="h2" component="p">Error 404</Typography>
            <Typography variant="h4" component="p">Page Not Found</Typography>
        </div>
    )
}

export default Error404