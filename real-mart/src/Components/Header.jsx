import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    redirectToCheckout = () => {  
       window.location.href="/checkout"
    }
    render(){
        return(
        <div style={{backgroundColor: "yellow"}}>
            <div>
            <h2>Cart</h2>
            <button onClick={this.redirectToCheckout}>{this.props.count}</button>
            </div>
  
        </div>
        )
    }
}

export default Header;