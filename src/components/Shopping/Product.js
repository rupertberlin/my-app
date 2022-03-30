import React, { Component } from 'react';
import './Product.css';


  class Product extends Component {
    constructor(props) {
        super(props);
        
      }

 
    
      render() {
  
          
          const itemsToBuy = this.props.products.map(item => {
              return(
            <div key={item.name}>
                <div className={item.name === this.props.item.name?'product choosed':'product'} id={item.name}
                onClick={() => this.props.chooseItem(item)}>
                  {item.emoji}
                </div>
                <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>       
                <p>{item.price}$ /unit</p>       
            </div>
            
            
              )}
            );


            

        return (
            <div className='product-container'>
                <h4>pack your box:</h4>
                {itemsToBuy}
            </div>
        );
      }

  }

  export default Product;