import React from 'react';
import { useIntl } from 'react-intl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles(() => ({
  languageSelect: {
    order: 4,
    color: '#FFFFFF',
    '& svg': {
      color: 'inherit',
    },
  },
}));

const LanguageSelect = ({ handleChangeLocale, locale }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Select
      className={classes.languageSelect}
      disableUnderline
      label={intl.formatMessage({ id: 'language.select' })}
      labelId={intl.formatMessage({ id: 'language.select' })}
      title={intl.formatMessage({ id: 'language.select' })}
      id="languageSelect"
      autoWidth
      value={locale}
      onChange={handleChangeLocale}
    >
      <MenuItem value="ro">RO</MenuItem>
      <MenuItem value="ru">RU</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  );
};

export default LanguageSelect;

LanguageSelect.propTypes = {
  handleChangeLocale: PropTypes.func,
  locale: PropTypes.string,
};
