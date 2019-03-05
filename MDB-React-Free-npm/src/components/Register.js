import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBTooltip,
  MDBIcon,
  MDBFormInline
} from "mdbreact";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
      selectedFile: null,
      radio: 1,
      img: "https://i.ibb.co/YZc9xgG/general-Avatar.png"
    };
  }
  handleRadioClick = nr => () => {
    this.setState({
      radio: nr
    });
    nr === 1
      ? this.setState({ gender: "male" })
      : this.setState({ gender: "female" });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    if (name === "selectedFile") {
      this.setState({
        selectedFile: event.target.files[0]
      });
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        this.setState({
          img: reader.result
        });
      };
      file && reader.readAsDataURL(file);
    }
  };
  handleSave = () => {
    console.log(this.state);
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol
            md="6"
            className="offset-md-3 shadow-box-example z-depth-5 signup"
          >
            <form>
              <br />
              <p className="h5 text-center mb-4">
                <MDBIcon icon="user-plus" />
                Sign up
              </p>
              <div className="">
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      label="First name"
                      icon="user"
                      group
                      type="text"
                      value={this.state.fname}
                      onChange={this.handleChange("fname")}
                      validate
                      error="wrong"
                      success="right"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      label="Last name"
                      group
                      type="text"
                      value={this.state.lname}
                      onChange={this.handleChange("lname")}
                      validate
                      error="wrong"
                      success="right"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="offset-md-3">
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="productImg"
                      type="file"
                      onChange={this.handleChange("selectedFile")}
                    />

                    <label htmlFor="productImg">
                      <MDBTooltip
                        placement="right"
                        tag="div"
                        tooltipContent="Upload Image"
                      >
                        <img
                          src={this.state.img}
                          className="rounded-circle mx-auto d-block avatar"
                          alt="aligment"
                        />
                      </MDBTooltip>
                    </label>
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  validate
                />
                <MDBInput
                  label="Confirm password"
                  icon="exclamation-triangle"
                  group
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange("confirmPassword")}
                  validate
                />
                <MDBFormInline>
                  <MDBInput
                    onClick={this.handleRadioClick(1)}
                    checked={this.state.radio === 1 ? true : false}
                    label="Male"
                    type="radio"
                    id="radio1"
                  />
                  <MDBInput
                    onClick={this.handleRadioClick(2)}
                    checked={this.state.radio === 2 ? true : false}
                    label="Female"
                    type="radio"
                    id="radio2"
                  />
                </MDBFormInline>
              </div>

              <MDBRow>
                <MDBCol md="8" className="offset-md-3">
                  <MDBBtn color="primary" onClick={this.handleSave}>
                    Register
                  </MDBBtn>
                  <MDBBtn color="red">Clear</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Register;
