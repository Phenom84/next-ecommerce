import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

export default () => {

    return (
        <div>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                <FormattedMessage id='home.page.title' />
            </Typography>
        </div>
    );
};