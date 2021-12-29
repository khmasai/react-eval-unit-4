import React from 'react';
import Header from './Header';
import data from './data';
import Product from './Product';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {cartCount:0, data: data, addedProducts: []};
    }

    showProducts = () => {
        const products = this.state.data.map((item, index) => {
            return(
                <Product {...item} index={index} addToCart={this.addToCart}/>  
            )
        });
        return products
    }

    addToCart = (count, index) => {
        if(data[index].count ===undefined){
            data[index].count = count;
        }else{
            data[index].count += count;
        }
        console.log(data)
        this.setState({cartCount: this.state.cartCount+count})
    }



    render(){
        return(
            <div>
            <Header count={this.state.cartCount}/>
                <h1> Home Component</h1>
                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {this.showProducts()}
                </div>
           
            </div>
        )
    }
}

export default Home;