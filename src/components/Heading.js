import * as React from 'react'
import { Fragment } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles({
  heading: {
    color:'#333',
	fontSize: '20px',
	fontWeight: '500',
	padding: '15px',
  },
});

function Heading (props){
	const classes = styles();
	return (
        <Fragment>
        	<Container maxWidth="lg">
        		<Typography variant="h1" className={classes.heading}>{props.text}</Typography>
    		</Container>		
        </Fragment>                
		)
}

export default Heading