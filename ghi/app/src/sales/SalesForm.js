import React from 'react';

class SalesForm extends React.Component {
    constructor(props) {        
        super(props);
        console.log("print something: ", props)
        this.state = {
            salesPerson: '',
            automobile: '',
            customer: '',
            price: '',
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const salesUrl = "http://localhost:8090/api/salespersons/";
        const customerUrl = "http://localhost:8090/api/customers/";
        const autoUrl = "http://localhost:8100/api/automobiles/";

        const salesResponse = await fetch(salesUrl);
        const customerResponse = await fetch(customerUrl);
        const autoResponse = await fetch(autoUrl);

        if (salesResponse.ok && customerResponse.ok && autoResponse.ok) {
            const saleData = await salesResponse.json();
            const customerData = await customerResponse.json();
            const autoData = await autoResponse.json();
            console.log("what the sales: ", saleData)
            this.setState({ 
                salespersons: saleData.salespersons,
                customers: customerData.customers,
                automobiles: autoData.automobiles
             })
        }
    }  


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.salesPerson;
        delete data.customers;               
        delete data.automobiles;               
        console.log(data)
    
        const salesHistoryUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(salesHistoryUrl, fetchConfig);
        if (response.ok) {
          const newName = await response.json();
          console.log(newName)          
          const cleared = {
            salesPerson: '',
            automobile: '',
            customer: '',
            price: '',
          }
          this.setState(cleared);
        }
      }

    handleChange(event) {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Customer</h1>
                        <form onSubmit={this.handleSubmit} id="create-saleshistory-form">
                            <div className="mb-3">
                                <select onChange={this.handleChange} value={this.state.salesPerson} placeholder="Salesperson" required id="salesPerson" name="salesPerson" className="form-select">
                                <option value="">Choose a Salesperson</option>                                
                                {this.state.salespersons.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>
                                        {salesperson.name}
                                        </option>
                                     );
                                })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} value={this.state.customer} placeholder="Customer" required id="customer" name="customer" className="form-select">
                                <option value="">Choose a Customer</option>                                
                                {this.state.customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                        {customer.name}
                                        </option>
                                     );
                                })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} value={this.state.automobile} placeholder="Automobile" required id="automobile" name="automobile" className="form-select">
                                <option value="">Choose an Automobile</option>                                
                                {this.state.automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.id} value={automobile.id}>
                                        {automobile.vin}
                                        </option>
                                     );
                                })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                                <label htmlFor="price">Price</label>
                            </div> 
                            <button className="btn btn-primary">Create</button>
                        </form>
                   </div>
                </div>
            </div>
        )
    }
}
  

export default SalesForm;

