import React, { useState } from 'react';

function ManufacturerForm() {
    const [name, setName] = useState('');

        const handleSubmit = async event => {
            event.preventDefault();
            const data = {
                name,
            };

            const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
            const fetchConfig = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const resposne = await fetch(manufacturerUrl, fetchConfig);

            if (resposne.ok) {
                setName('');
            }
        }

        const handleNameChange = (event) => {
            setName(event.target.value);
        }
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleNameChange}
                  value={name}
                  placeholder="Manufacturer Name"
                  required
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ManufacturerForm;