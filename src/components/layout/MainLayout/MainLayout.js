import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import Paper from '@material-ui/core/Paper';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';
import Container from '@material-ui/core/Container';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <h2>MainLayout</h2>
    <Container fixed>
      <Paper spacing={2}>
        {children}
      </Paper>
    </Container>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
