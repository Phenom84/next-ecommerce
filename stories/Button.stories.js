import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Grid } from '@material-ui/core';

export default {
  title: 'Button',
  component: Button,
};

export const WithControls = (args) => <Button {...args}>Primary</Button>;
WithControls.argTypes = {
  variant: {
    control: {
      type: 'inline-radio',
      options: ['text', 'contained', 'outlined'],
    },
  },
  color: {
    control: {
      type: 'inline-radio',
      options: ['default', 'inherit', 'primary', 'secondary'],
    },
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
  fullWidth: {
    control: {
      type: 'boolean',
    },
  },
  disableRipple: {
    control: {
      type: 'boolean',
    },
  },
  disableElevation: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};

WithControls.args = {
  variant: 'text',
  color: 'default',
  size: 'medium',
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
  disabled: false,
};

export const Text = () => (
  <Button onClick={action('clicked')}>text button</Button>
);

export const Contained = () => (
  <React.Fragment>
    <Button variant="contained">default</Button>
    <Button variant="contained" color="primary">
      primary
    </Button>
    <Button variant="contained" color="secondary">
      secondary
    </Button>
    <Button variant="contained" disabled>
      disabled
    </Button>
    <Button href="#contained-buttons">link</Button>
  </React.Fragment>
);

export const outlined = () => (
  <React.Fragment>
    <Button variant="outlined">default</Button>
    <Button variant="outlined" color="primary">
      primary
    </Button>
    <Button variant="outlined" color="secondary">
      secondary
    </Button>
    <Button variant="outlined" disabled>
      disabled
    </Button>
    <Button href="#outlined-buttons">link</Button>
  </React.Fragment>
);

export const Size = () => (
  <React.Fragment>
    <Grid container spacing={2}>
      <Grid item>
        <Button color="primary" variant="contained" size="small">
          small
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained" size="medium">
          medium
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained" size="large">
          large
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item>
        <Button color="primary" variant="outlined" size="small">
          small
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" variant="outlined" size="medium">
          medium
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" variant="outlined" size="large">
          large
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item>
        <Button size="small">small</Button>
      </Grid>
      <Grid item>
        <Button size="medium">medium</Button>
      </Grid>
      <Grid item>
        <Button size="large">large</Button>
      </Grid>
    </Grid>
  </React.Fragment>
);

export const Effect = () => (
  <Grid container spacing={2}>
    <Grid item>
      <Button color="primary" variant="contained" disableElevation>
        disabled Elevation
      </Button>
    </Grid>
    <Grid item>
      <Button color="primary" variant="contained">
        elevation
      </Button>
    </Grid>
    <Grid item>
      <Button color="primary" variant="contained" disableRipple>
        disable Ripple
      </Button>
    </Grid>
  </Grid>
);
