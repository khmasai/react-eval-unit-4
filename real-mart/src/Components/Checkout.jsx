import React from 'react';
import Header from './Header';
import data from './data';
import Product from './Product';
class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.state = {cartCount:0, data: data, addedProducts: []};
    }

    showProducts = () => {
        const products = data.map((item, index) => {
            if(item.count && item.count >0){
                console.log("I", item)
                return(
                    <Product {...item} index={index} addToCart={this.addToCart}/>  
                )
            }
        });
        return products
    }



    render(){
        console.log("data", data)
        return(
            <div>
            <Header count={this.state.cartCount}/>
                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {this.showProducts()}
                </div>
            </div>
        )
    }
}

export default Checkout;