import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll } from '../../../redux/postsRedux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { PostsList } from '../../features/PostsList/PostsList';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.scss';

const Component = ({className, children, user, posts}) => {
  const userOptions = user ?
    (
      <Grid item>
        <Button component={Link} variant="contained" color='primary' to='/post/add'>Add post</Button>
      </Grid>
    ) : null;
  return (
    <div className={clsx(className, styles.root)}>
      {userOptions}
      <PostsList posts={posts}/>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
