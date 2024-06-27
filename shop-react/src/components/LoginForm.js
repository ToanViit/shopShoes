import React, { Component } from 'react';
import '../styles/LoginForm.css';

class LoginForm extends Component {
  state = {
    form: {
      email: '',
      password: ''
    },
    errors: {},
    remember: false // Initialize remember state
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));

    console.log(this.state.form)
  
  };

  handleCheckboxChange = (event) => {
    const { checked } = event.target;
    this.setState({ remember: checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state.form;
    const errors = {};

    if (email.trim() === "") {
      errors.email = "Email is required";
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', this.state);

    }
  };

  render() {
    const { form, errors, remember } = this.state;

    return (
      <div>
        <div className="sidenav">
          <div className="login-main-text">
            <h2>Application<br /> Login Page</h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type=""
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={this.handleChange}
                    
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={this.handleChange}
                
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={remember}
                    onChange={this.handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
