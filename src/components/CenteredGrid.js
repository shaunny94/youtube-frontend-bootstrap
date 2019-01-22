import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './SearchAppBar';
import CardMedia from '@material-ui/core/CardMedia';
import SimpleTable from './Table';
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
      title: "",
      link: "",
      image: ""
    }
   
  }
  handleInputChange = (e) => {
    this.setState({url: e.target.value});
    console.log(e.target.value)
    console.log(this.state)
    }

 handleClickPost = () => {
    axios.post("http://127.0.0.1:8900/search",
     this.state)
    .then(res => {
      if (res.status === 'success'){
        this.setState({image: res.image})
      }
      console.log(res)
    })
    }

    handleClickGet = () => {
      axios.get("http://127.0.0.1:8900/search")
      .then(res => {
          console.log(res)
          this.setState({image: res.data.image,
                         title: res.data.title,
                         link: res.data.link  })
          
          
        }
      )
      .catch(e => {
        console.log(e)
      })
      }
  
     createData = (title, link, image) => {
        let id = 0;
        id += 1;
        return {id, title, link, image };
      }
      
      

  render() {
    this.rows = [
      this.createData(this.state.title, this.state.link, this.state.image)
    ]
    

    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchAppBar handleclick={this.handleClickPost} handleinput={this.handleInputChange} /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}><SimpleTable rows={this.rows} data={this.state}  handleclick={this.handleClickGet}/></Paper>
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


