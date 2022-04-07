import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    fname: '',
    uname: '',
    gender: "",
    email: "",
    
    hospital: "",
    password: "",
    cpassword : ""
    
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const postData = async (data) => {
    await axios.post('http://localhost:5000/api/user/signUp', data)
      .then(res => {
        console.log(res.data)
      })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.fname === "" || data.uname === "" || data.email === "" || data.password === "" || data.cpassword === "") {
      window.alert("please Fill Add Field")
    } else if (data.password !== data.cpassword) {
      window.alert("Password Not Match");
    } else {
      postData(data)
    }
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto my-5 text-center">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control mt-3"
                placeholder="Enter Your Full name"
                name="fname"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                class="form-control mt-3"
                placeholder="Enter user name"
                name="uname"
                onChange={(e) => handleChange(e)}
              />
              <div class="form-group">
                <select
                  class="form-control mt-3"
                  name="gender"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <input
                type="email"
                class="form-control mt-3"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="form-group">
              <select
                class="form-control mt-3"
                name="hospital"
                onChange={(e) => handleChange(e)}
              >
                <option>Select Hospital</option>
                <option>cmc</option>
                <option>cscr</option>
                <option>max</option>
                <option>national hospital</option>
                <option>evercare</option>
              </select>
            </div>

            <input
              type="password"
              class="form-control mt-3"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />

            <input
              type="password"
              class="form-control mt-3"
              placeholder="Confirm Password"
              name="cpassword"
              onChange={(e) => handleChange(e)}
            />
            <button className="btn btn-success mt-2" onClick={handleSubmit} >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login