import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './SearchAppBar';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CenteredGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: "",
      image: ""
    }
  }

 
  
  render() {
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchAppBar /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}><CardMedia src={this.state.image}/></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);


