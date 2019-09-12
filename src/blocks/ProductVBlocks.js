/*
*   Show product list based on selected cateory
*   Compinent Used: 
*   "ProductListBox for getting single product box"
*/
import * as React from 'react'
import ProductListBox from '../components/ProductListBox'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles'

const ProductVBlocks = (props) => {

    let { prodList } = props
    let prodData = (typeof prodList.products === 'undefined') ? [] : prodList.products

	return (
        <CatBlock> 
            <Container maxWidth="xs">
               	{ 	prodData.map((data, index) => (
                        <ProductListBox 
                        test = 'asdf'
                            key={index} 
                            name={data.name} 
                            image={data.image_urls}
                            weight={data.weight} 
                            weightUnit={data.weight_unit}
                            mrp={data.price} 
                            specialmrp={data.final_price} 
                            rating={data.rating} 
                            inStock={data.is_in_stock} 
                        />
                    )
               	)
           		}	   
            </Container>      
        </CatBlock>          
	)
}

const CatBlock = styled(Container)({
    padding: '0',
})

export default ProductVBlocks