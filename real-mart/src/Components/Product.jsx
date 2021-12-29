import React from 'react';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state= {count:0}
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }
    }

    addToCart = () => {
        this.props.addToCart(this.state.count, this.props.index)
    }
    
    render(){
        return(
            <div className='row' style={{ height: 500, width: 500, border:'3px solid red', marginLeft: 20,marginBottom: 20, paddingRight: 100}}>
                <br/><br/> 
                <h3>{this.props.id}</h3>
                <h3>{this.props.name}</h3>
                <h3>{this.props.country_of_origin}</h3>
                <img src={this.props.image}/>
                <h3>{this.props.description}</h3>
                <h3>{this.props.price}</h3>
               <h3>Qty:</h3>
               <button onClick={this.decrement}>-</button>{'\u00A0'}{'\u00A0'}{'\u00A0'}{this.state.count}{'\u00A0'}{'\u00A0'}{'\u00A0'}
               <button onClick={this.increment}>+</button>
                <br/><br/>
                <button onClick={this.addToCart} disabled={this.state.count === 0}>ADD</button>
            </div>
        )
    }
}

export default Product;