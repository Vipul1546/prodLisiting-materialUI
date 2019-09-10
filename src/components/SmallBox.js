import * as React from 'react'
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: props=> ({
		padding: '12px 0px',
		width:'120px',
		backgroundImage: `url(${props.background})`,
		backgroundSize: '100% 100%',
		color:'#fff',
		fontSize:'14px',
		textAlign:'center',
		display: 'inline-block',
		marginRight: '10px',
		whiteSpace: 'initial',
		height: '70px',
	}), 
	all: {
		padding: '12px 0px',
		width:'120px',
		backgroundSize: '100% 100%',
		color:'#333',
		fontSize:'14px',
		textAlign:'center',
		display: 'inline-block',
		marginRight: '10px',
		whiteSpace: 'initial',
		height: '70px',
	}
});


function SmallBox(props) {

	const classes = useStyles(props);
	const showList = () => {
		props.dataCallback(props.category_id);
	}
	return (
        <Fragment>
        { (props.id === 0)
        	? 	<ButtonBase className={classes.all}
          			focusRipple 
          			variant="outlined"
      			>
                    View All
                </ButtonBase>
            : ''
        }
            <Button 
            	className={classes.root} 
            	onClick={showList}
            >
            	{props.name}
        	</Button>

        { (props.id === (props.total - 1))
        	? 	<ButtonBase className={classes.all}
	          		focusRipple 
	          		variant="outlined"
      			>
                    View All
                </ButtonBase>
            : ''

        }
        </Fragment>                
		)
}



export default SmallBox