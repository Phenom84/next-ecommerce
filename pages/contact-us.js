import React, { useState } from 'react';
import { Toolbar, Box, TextField, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import MainLayout from '../components/_layout/MainLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const [input, setInput] = useState({ name: '' });
  const intl = useIntl();

  // let myform = document.getElementById('contact');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // extract form data
    const formdata = new FormData(event.target);

    // convert FormData to json object
    // SOURCE: https://stackoverflow.com/a/46774073
    const json = {};
    formdata.forEach(function (value, prop) {
      json[prop] = value;
    });
    console.log(json);

    await fetch(
      'https://europe-west1-organic-setup-287317.cloudfunctions.net/Contact_form',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: json,
      },
    );
  };

  return (
    <MainLayout title={intl.formatMessage({ id: 'home.page.title' })}>
      <Box display="flex" flexDirection="column">
        <Toolbar />
        <Container maxWidth="xs">
          <form
            onSubmit={handleSubmit}
            //name="contact"
            //id="contact"
            //method="POST"
            //action="https://europe-west1-organic-setup-287317.cloudfunctions.net/Contact_form"
          >
            <TextField
              autoComplete
              autoFocus
              label="Name"
              id="name"
              className={classes.textField}
              helperText=""
              margin="dense"
              variant="outlined"
              fullWidth
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              required
            />
            <TextField
              autoComplete
              label="E-mail"
              id="email"
              className={classes.textField}
              margin="dense"
              variant="outlined"
            />
            <TextField
              autoComplete
              label="Subject"
              id="subject"
              className={classes.textField}
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="message"
              className={classes.textField}
              label="Message"
              multiline
              rows={6}
              margin="dense"
              variant="outlined"
            />
            <br />
            <Button type="submit" form="contact" variant="contained">
              SUBMIT
            </Button>
          </form>
        </Container>
      </Box>
    </MainLayout>
  );
}
