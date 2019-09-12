/*
*   Show category list box based on props provided
*/

import * as React from 'react'
import { useRef } from 'react'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/Button'

const useStyles = makeStyles({
	root: props=> ({
		padding: '12px 0px',
		width:'120px',
		backgroundImage: `url(${props.background})`,
	    backgroundColor: 'rgba(0, 0, 0, 0.22)',
		backgroundSize: '100% 100%',
		color:'#fff',
		fontSize:'14px',
		textAlign:'center',
		display: 'inline-block',
		marginRight: '10px',
		whiteSpace: 'initial',
		height: '65px',
	}), 
	all: {
		padding: '12px 0px',
		width:'120px',
		backgroundSize: '100% 100%',
		color:'#757575',
		fontSize:'14px',
		textAlign:'center',
		display: 'inline-block',
		marginRight: '10px',
		whiteSpace: 'initial',
		height: '65px',
		borderColor: '#979797',
	}
})


const SmallBox = (props) => {

	const classes = useStyles(props)
	const catRef = useRef()
	const showList = () => {
		let offsetLeft = catRef.current.offsetLeft

		// using callback to send category id back for rendering product list based on category id
		props.dataCallback(props.category_id, offsetLeft)
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
            	ref={catRef}
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