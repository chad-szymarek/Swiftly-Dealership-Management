import React, { useState } from "react";

function ManufacturerForm() {
  const [state, setState] = useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const resposne = await fetch(manufacturerUrl, fetchConfig);

    if (resposne.ok) {
      setState({
        name: "",
      });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={state.name}
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
