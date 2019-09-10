import * as React from 'react'
import { Fragment } from 'react'
import Heading from '../components/Heading'
import CategoryHBlocks from '../blocks/CategoryHBlocks'
import ProductVBlocks from '../blocks/ProductVBlocks'
import Skeleton from 'react-loading-skeleton'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles'
const axios = require('axios')

class Listing extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            catList: [],
            prodList: [],
            isCatLoading: true,
            isProdLoading: true 
        }
    }

    // Get Product Listing from Category ID
    getCatID = (catID) => {
        this.setState({
            isProdLoading: true,
        })
        axios.get(' https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1', {
                    params: {
                        category_id: catID,
                    }
                })
            .then(res => { 
                // handle success
                this.setState({
                    prodList: res.data,
                    isProdLoading: false,
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error)
        })
    }

    componentDidMount(){

        // Get Category Listing
        axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
            .then(res => { 
                // handle success
                this.setState({
                    catList: res.data.category_list,
                    prodList: res.data.product_list,
                    isCatLoading: false,
                    isProdLoading: false,
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error)
        })
    }

    render(){
        let {catList, prodList, isCatLoading, isProdLoading} = this.state
    	return (
            <Fragment>
                <Heading text="Our Products" />
                {isCatLoading
                    ? <Skeleton count={3} height={70} width={120} duration={1}/>
                    : <CategoryHBlocks catList={catList} catIDCallback={this.getCatID} isCatLoading={isCatLoading} />
                }
                {isProdLoading
                    ? <Skeleton count={3} height={150} duration={1}/>
                    : <ProductVBlocks prodList={prodList} isProdLoading={isProdLoading}/>
                }
                
            </Fragment>                
    		)
    }
}


export default Listing