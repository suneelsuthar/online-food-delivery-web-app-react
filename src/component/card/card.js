import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css'
import Chips from './../user page/chip'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import Rating from './../detail/review'
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    float:"left"
  },
});

export default class ImgMediaCard extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
render(){
    console.log(this.props)
  return (
        <Link to={{ pathname: '/resturant', state: { profile: this.props} }}>
    <Card className="card" onClick={()=>{return localStorage.setItem("profile" , JSON.stringify(this.props.email))}} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={this.props.certificate}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
             <span className="name">{this.props.name}</span> 
             <ShoppingCartIcon className="carticon" />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica

          </Typography>
          <Rating />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chips name="piza"/><Chips name="burger"/><Chips name="food"/><Chips name="dees"/>
      </CardActions>
    </Card>
    </Link>
  );
}

}