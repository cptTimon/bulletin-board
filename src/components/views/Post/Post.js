import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { NotFound } from '../NotFound/NotFound';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { initialState } from '../../../redux/initialState';
import styles from './Post.module.scss';

const Component = ({className, children, post}) => (
  <Grid container spacing={2} className={clsx(className, styles.root)}>
    <Grid item xs={12} md={6}>
      <Paper elevation="2">
        <Grid item xs={12}>
          <Typography variant='title' component='h1' align='center'>
            {initialState.posts.data[0].title}
          </Typography>
          <Typography variant='h6' component='h1' align='left' className={styles.contact}>
            <h3>Contact info:</h3>
            <p>email: {initialState.posts.data[0].email}</p>
            <p>phone: {initialState.posts.data[0].email}</p>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <img src={initialState.posts.data[0].photo} alt="alt"  className={clsx(styles.photo, 'MuiPaper-elevation1')}></img>
    </Grid>
    <Grid item xs={12}>
        Published: {initialState.posts.data[0].publicationDate} <br/>
        Last update: {initialState.posts.data[0].updateDate}
    </Grid>
  </Grid>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
