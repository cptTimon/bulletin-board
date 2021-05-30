import React from 'react';
import PropTypes from 'prop-types';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import styles from './NoUserNav.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Typography>
      <Link className={styles.link} href="https://google.com" >
        Login
      </Link>
    </Typography>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NoUserNav,
  // Container as NoUserNav,
  Component as NoUserNavComponent,
};
