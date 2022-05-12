import React from 'react';

class SalesForm extends React.Component {
    constructor(props) {        
        super(props);        
        this.state = {            
            automobile: '',
            salesPerson: '',
            customer: '',            
            price: '',
            salesPersons: [],
            autos: [],
            customers: [],           
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

        if (autoResponse.ok && customerResponse.ok && autoResponse.ok) {
            const saleData = await salesResponse.json();
            const customerData = await customerResponse.json();
            const autoData = await autoResponse.json();
            this.setState({ 
                salesPersons: saleData.salespersons,
                customers: customerData.customers,
                autos: autoData.autos
             })
        }
    }  
  
 
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.salesPerson;        
        delete data.salesPersons;
        delete data.salesPerson;
        delete data.customers;               
        delete data.autos;               
    
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
                    <h1>Record a new sale</h1>
                    <form onSubmit={this.handleSubmit} id="create-sales-form">
                    <div className="mb-3">
                        <select onChange={this.handleChange} value={this.state.automobile} required name="automobile" id="automobile" className="form-select">
                          <option value="">Choose an automobile</option>
                          {this.state.autos.map(auto => {
                            return (
                              <option key={auto.href} value={auto.vin}>
                                  {auto.year} {auto.color} {auto.model.manufacturer.name} {auto.model.name}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <select onChange={this.handleChange} value={this.state.salesPerson} required name="salesPerson" id="salesPerson" className="form-select">
                          <option value="">Choose a sales person</option>
                          {this.state.salesPersons.map(salesperson => {
                            return (
                              <option key={salesperson.name} value={salesperson.name}>{salesperson.name}</option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <select onChange={this.handleChange} value={this.state.customer} required name="customer" id="customer" className="form-select">
                          <option value="">Choose a customer</option>
                          
                          {this.state.customers.map(customer => {                              
                            return (
                              <option key={customer.id} value={customer.name}>
                                  {customer.name}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="form-floating mb-3">
                          <input onChange={this.handleChange} value={this.state.price} placeholder="Sale price" required type="number" name="price" id="price" className="form-control" />
                          <label htmlFor="price">Sale price</label>
                      </div>
                      <button className="btn btn-primary">Create</button>
                    </form>
                  </div>
                </div>
              </div>
            );
          }
        }
        
        

  

export default SalesForm;

