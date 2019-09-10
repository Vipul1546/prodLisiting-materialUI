import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    marginBottom:'10px',
    height: '170px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',	
    width: '65%',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '0.4x',
  },
  content: {
    flex: '1 0 auto',
    position: 'relative'
  },
  cover: {
    width: '30%',
    backgroundSize: 'contain',
  },
  button: {
  	minWidth: '140px',
    height: '40px',
    backgroundColor: '#4fcf64',
    margin: '5px 0px',
  },
  BN : {
  	color:'#fff',
  	'&:hover': {
       background: "#4fcf64",
    },
  },
  OFS : {
  	display: 'none',
  },
  CrossPrice : {
  	textDecoration:'line-through',
  	fontSize: '13px',
    color: 'grey',
  },
  OrgPrice: {
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.4px',
    marginRight: '10px',
    marginTop: '10px',
    color:'#333',
  },
  weight : {
  	fontSize: '13px',
    color: 'grey',
  },
  Rating: {
  	position: 'absolute',
    top: '10px',
    right: '-10px',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: '1',
    color: 'grey',
    fontSize: '12px',
  },
  RatingIcon: {
  	fontSize: '13px',
  },
}));

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'p',
      },
    },
  },
});

export default function MediaControlCard(props) {
  const classes = useStyles();
  let {name, image,weight,weightUnit,mrp,specialmrp,rating,inStock } = props
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={image['x300']}
        title={ name }
      />
		<div className={classes.details}>
			<CardContent className={classes.content}>
				<Typography variant="body2">
					{ name } 
					{ rating
						? 	<span className={classes.Rating}>{rating}<StarIcon className={classes.RatingIcon} fontSize="small" color="disabled" /></span>
						: 	''
					}
					
				</Typography>
				{ (weight > 0)
					?	<Typography className={classes.weight} variant="subtitle1" color="textSecondary">
							({weight+' '+weightUnit})
						</Typography>
					: 	''
				}
				<Typography className={classes.OrgPrice} variant="subtitle1" color="textSecondary">
					₹ {specialmrp} <span className={classes.CrossPrice}> ₹ {mrp}</span>
				</Typography>
				{ inStock 
					? 	<Button variant="contained" color="inherit" className={`${classes.button} ${classes.BN}`}>
							Buy Now
						</Button>
					:   <Button variant="contained" color="secondary" disabled className={`${classes.button} ${classes.OFS}`}>
					        Out of stock
					    </Button>
				}
			</CardContent>
		</div>
    </Card>
  );
}