import * as React from 'react'
import ProductListBox from '../components/ProductListBox'
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';

class ProductVBlocks extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            prodList: [],
            count: 3,
        };
    }
    render(){
        let { prodList} = this.props
        let prodData = (typeof prodList.products === 'undefined') ? [] : prodList.products;
        let {count} = this.state 
    	return (
            <CatBlock> 
                <Container maxWidth="xs">
                   	{ 	prodData.slice(0, count).map((data, index) => (
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
}

const CatBlock = styled(Container)({
    padding: '0',
});

export default ProductVBlocks