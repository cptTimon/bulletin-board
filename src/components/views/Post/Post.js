import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { getUser } from '../../../redux/userRedux';
import { initialState } from '../../../redux/initialState';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { NotFound } from '../NotFound/NotFound';
import Link from '@material-ui/core/Link';
import styles from './Post.module.scss';
import Button from '@material-ui/core/Button';

const Component = ({className, post, user}) => {
  if(!post) return <NotFound />;
  else {
    const canEditPost = user ? user.email === post.email || user.type === 'admin' : false;
    return (
      <Grid container spacing={2} className={clsx(className, styles.root)}>
        <Grid item xs={12} md={6}>
          <Paper elevation="2">
            <Grid item xs={12}>
              <Typography variant='title' component='h1' align='center'>
                {initialState.posts.data[0].title}
              </Typography>
              <Typography variant='h6' component='h1' align='left' className={styles.contact}>
                <h3>Contact info:</h3>
                <p>email: {post.email}</p>
                <p>phone: {post.email}</p>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={post.photo} alt="alt"  className={styles.photo}></img>
        </Grid>
        <Grid item xs={12}>
          {canEditPost &&
          <Grid item>
            <Button component={Link} variant="contained" color='primary' to='/post/add'>Edit post</Button>
          </Grid>}
            Published: {post.publicationDate} <br/>
            Last update: {post.updateDate}
        </Grid>
      </Grid>
    );
  }
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
  user: getUser(state),
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
