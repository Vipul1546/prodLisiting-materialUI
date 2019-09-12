/*
*   Show category list based on selected cateory
*   Compinent Used: 
*   "SmallBox for getting single category box"
*/

import * as React from 'react'
import SmallBox from '../components/SmallBox'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/styles'
import { createRef } from 'react'

const CategoryHBlocks = (props) => {
    const catBlk = createRef()

    const processData = (catID, offsetLeft) => {
        let selOffset = (offsetLeft - 60)
        var container = catBlk.current
        let a=''
        var slideTimer = setInterval(function(){
             if(container.scrollLeft < selOffset){ 
                container.scrollLeft += 1
                if(container.scrollLeft >= selOffset || container.scrollLeft === a){
                    window.clearInterval(slideTimer)
                }
                a = container.scrollLeft
            } else {
                container.scrollLeft -= 1
                if(container.scrollLeft <= selOffset){
                    window.clearInterval(slideTimer)
                }
            }
        }, 3)

        // using callBack to send category ID back
        props.catIDCallback(catID)
    }

        let { catList } = props
    	return (
            <CatBlock ref={catBlk}>
                <Container >
                    {   catList.map((data, index) => (
                            <SmallBox 
                                key={index} 
                                category_id={data.category_id} 
                                id={index} 
                                total={catList.length} 
                                name={data.category_name} 
                                background={data.category_image}
                                dataCallback={processData}
                                />
                        ))
                    }
                </Container>      
            </CatBlock>          
    		)
}

const CatBlock = styled(Container)({
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    paddingBottom: '15px',
    paddingLeft: '0',
    transition: 'all .5s',

})

export default CategoryHBlocks