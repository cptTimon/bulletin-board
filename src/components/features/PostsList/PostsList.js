import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import styles from './PostsList.module.scss';

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));


const Component = ({className, children, posts}) => {
  const classes = useStyles();
  return (
    <Container className={styles.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardMedia
                className={classes.cardMedia}
                image={post.photo}
                title={post.title}
              />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  More details...
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostsList,
  // Container as PostsList,
  Component as PostsListComponent,
};
