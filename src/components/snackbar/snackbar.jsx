import React from 'react';
import { withStyles, Snackbar as Snack, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';

import snackbarContentStyle from '../../assets/jss/material-dashboard-react/snackbarContentStyle';

function Snackbar({ ...props }) {
  const { classes, message, color, close, icon, place, open, closeNotification } = props;
  let action = [];
  const messageClasses = cx({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal:
          place.indexOf('l') !== -1 ? 'left' : place.indexOf('c') !== -1 ? 'center' : 'right',
      }}
      open={open}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      SnackbarContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message,
        },
      }}
    />
  );
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  closeNotification: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
  close: PropTypes.bool,
  icon: PropTypes.func,
  place: PropTypes.oneOf(['tl', 'tr', 'tc', 'br', 'bl', 'bc']),
  open: PropTypes.bool,
};

Snackbar.defaultProps = {
  color: 'info',
  close: false,
  icon: undefined,
  place: undefined,
  open: false,
};

export default withStyles(snackbarContentStyle)(Snackbar);
