import React from 'react';

export default class AddItem extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        let obj = this.props.products.find(o => o.name === this.state.productName);
        let newItem =  
            { 
                id: Math.floor(Math.random() * 1000000),
                product: obj,
                quantity: this.state.qty,
            }
        
        
        this.props.addToCart(newItem)
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
      }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                 <div className="form-group">
                    <label htmlFor="qty">Quantity</label>
                    <input onChange={ this.onChange } type="text" className="form-control" id="qty"/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product</label>
                        <select className="form-control form-control-lg" id="productName" onChange={ this.onChange }>
                            <option value="">Select One</option>
                            { this.props.products.map(opt => {
                                return (
                                    <option key={ opt.id } value={ opt.name }>{opt.name}</option>
                                );
                            })}
                        </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add to Cart" />
                </div>
            </form>
        )
    }
}