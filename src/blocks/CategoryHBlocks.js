import * as React from 'react'
import SmallBox from '../components/SmallBox'
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';

class CategoryHBlocks extends React.PureComponent{

    processData = (catID) => {
        this.props.catIDCallback(catID);
    }

    render(){
        let { catList } = this.props;
    	return (
            <CatBlock>
                <Container>
                    {   catList.map((data, index) => (
                            <SmallBox 
                                key={index} 
                                category_id={data.category_id} 
                                id={index} 
                                total={catList.length} 
                                name={data.category_name} 
                                background={data.category_image}
                                dataCallback={this.processData}
                                />
                        ))
                    }
                </Container>      
            </CatBlock>          
    		)
    }
}

const CatBlock = styled(Container)({
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    paddingBottom: '15px',
});

export default CategoryHBlocks