import React from 'react';
import { Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import MainLayout from '../components/_layout/MainLayout';

const useStyles = makeStyles(() => {});

export default function ContactUs() {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <MainLayout title={intl.formatMessage({ id: 'home.page.title' })}>
      <Box display="flex" flexDirection="column">
        <Toolbar />
        <form
          name="contact"
          method="GET"
          action="https://europe-west1-organic-setup-287317.cloudfunctions.net/Contact_form"
        >
          <div className="form-group">
            <label className="small">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required=""
            />
          </div>
          <div className="form-group">
            <label className="small">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required=""
            />
          </div>
          <div className="form-group">
            <label className="small">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              required=""
            />
          </div>

          <div className="form-group">
            <label className="small">Message</label>
            <textarea
              name="message"
              rows="3"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </Box>
    </MainLayout>
  );
}
