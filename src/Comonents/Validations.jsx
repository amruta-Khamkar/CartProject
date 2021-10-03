import React, { Component } from 'react';
// import  '../vali.css'

const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const regForPass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);

let pass;
export class Validations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                Fname: ' ',
                Lname: ' ',
                email: ' ',
                Aemail: ' ',
                age: ' ',
                gen: ' ',
                password: ' ',
                confirmPassword: ' ',
                mobile: ' ',
                Amobile: ' ',
                quali: ' ',
                cName: ' ',
                passout: ' ',
                add: ' ',
                city: ' ',
                pin: ' ',
                state: ' ',
                exp: ' ',
                con: ' ',
                intr: ' '
            }
        }
    }

    handler = (event) => {
        console.log(this.props.data)
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'Fname':
                errors.Fname = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
                break;
            case 'Lname':
                errors.Lname = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
                break;
            case 'age':
                errors.age = (regForAge.test(value)) && (value <= 100) ? '' : '! age Should Contain number and below 100';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : '! Email is not valid';
                break;
            case 'Aemail':
                errors.Aemail = regForEmail.test(value) ? '' : '! Email is not valid';
                break;
            case 'password':
                console.log(value)
                pass = value;

                if ((regForPass.test(value) && (value.length >= 8))) {
                    errors.password = "";
                }
                else {
                    errors.password = "Password Should Contain One Alphabetical letter one number one special character and length should greater than equal to 8"
                }

                break;
            case 'confirmPassword':
                errors.confirmPassword = pass !== value ? '! Password and confirm password must be same' : '';
                break;

            case 'mobile':
                errors.mobile = value.length === 10 ? '' : 'Phone number should contain 10 numbers';
                break;

            case 'Amobile':
                errors.Amobile = value.length === 10 ? '' : 'Phone number should contain 10 numbers';
                break;

            case 'quali':
                errors.quali = value.length <= 5 ? '' : 'Minimum 5 letters allowed write in short form';
                break;

            case 'cName':
                errors.cName = regForName.test(value) && value.length >= 10 ? '' : 'It should contain minimum 10 letters';
                break;

            case 'passout':
                let year = [2019, 2020, 2021];
                console.log(year)
                errors.passout = ((value.includes(year[0])) || (value.includes(year[1])) || (value.includes(year[2])) && (value.length === 4)) ? '' : 'only 2019 , 2020, 2021 Passout Year Allowed';
                break;


            case 'add':
                errors.add = regForName.test(value) && value.length >= 20 ? '' : 'It should contain atleast 20 letters';
                break;

            case 'city':
                errors.city = regForName.test(value) && value.length >= 2 ? '' : 'Enter Only Alphabets no numbers allowed';
                break;

            case 'pin':
                errors.pin = (regForAge.test(value)) && value.length >= 6 ? '' : 'It should contain only numbers and atleast 6 numbers';
                break;

            case 'state':
                errors.state = regForName.test(value) ? '' : '! state Should Contain Alphabets';
                break;

            case 'exp':
                errors.exp = regForAge.test(value) && value.length <= 2 ? '' : '! it Should Contain only numbers and maximum two numbers allowed';
                break;

            case 'con':
                console.log(value)
                errors.con = document.getElementById("checks").checked == true ? '' : 'Please Agree to terms and conditions';
                break;


            case 'intr':
                errors.intr = regForName.test(value) && value.length >= 5 ? '' : '! write atleast one interst';
                break;

            case 'gen':
                let gend = ["Female", "Male", "Other"];
                errors.gen = (value.includes(gend[0]) || value.includes(gend[1]) || value.includes(gend[2]) && value.length === 4) ? '' : 'only Female , Male or others are Allowed';
                break;

            default:
                break;

        }
        this.setState({ errors: errors })
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.validate(this.state.errors))
        if (this.validate(this.state.errors)) {
            alert("Application Submitted We will contact you soon!");
            document.getElementById("Fname").value = '';
            document.getElementById("Lname").value = '';
            document.getElementById("email").value = '';
            document.getElementById("Aemail").value = '';
            document.getElementById("age").value = '';
            document.getElementById("gen").value = '';
            document.getElementById("pass").value = '';
            document.getElementById("Cpass").value = '';
            document.getElementById("mob").value = '';
            document.getElementById("Amobile").value = '';
            document.getElementById("quali").value = '';
            document.getElementById("cName").value = '';
            document.getElementById("passout").value = '';
            document.getElementById("add").value = '';
            document.getElementById("Cname").value = '';
            document.getElementById("pin").value = '';
            document.getElementById("state").value = '';
            document.getElementById("exp").value = '';
            document.getElementById("intr").value = '';
            document.getElementById("checks").value = '';
        }
        else {
            alert("Please Fill All fields Correctly");
        }
    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        console.log(errors);
        console.log(valid)
        return valid;
    }
    toggle = () => {
        let pass = document.getElementById("pass");
        let Cpass = document.getElementById("Cpass");
        let check = document.getElementById("check");

        if (check.checked) {
            pass.type = "text";
            Cpass.type = "text";
        }
        else {
            pass.type = "password";
            Cpass.type = "password";
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="flex">
                    <form className="form" onSubmit={this.formSubmit}>
                        <h1 style={{ color: 'red' }} >{this.props.data}</h1>

                        <label>First Name :</label> <input type="text" name="Fname" id="Fname" onChange={this.handler} /><br></br>
                        {errors.Fname.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Fname}</span>}<br />

                        <label>Last Name :</label> <input type="text" name="Lname" id="Lname" onChange={this.handler} /><br></br>
                        {errors.Lname.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Lname}</span>}<br />

                        <label >Email :</label>   <br></br><input type="text" name="email" id="email" onChange={this.handler} />
                        <br></br>
                        {errors.email.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.email}</span>}<br />

                        <label>Alternate Email :</label> <input type="text" name="Aemail" id="Aemail" onChange={this.handler} /><br></br>
                        {errors.Aemail.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Aemail}</span>}<br />

                        <label>Age :</label> <br></br> <input type="text" name="age" id="age" onChange={this.handler} /><br></br>
                        {errors.age.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.age}</span>}<br />

                        <label>Enter Your Gender :</label> <input type="text" name="gen" id="gen" onChange={this.handler} /><br></br>
                        {errors.gen.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.gen}</span>}<br />


                        <label>Password :</label>  <input type="password" name="password" id="pass" onChange={this.handler} /><br></br>
                        {errors.password.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.password}</span>}<br />

                        <label>Confirm Password :</label> <input type="password" id="Cpass" name="confirmPassword" onChange={this.handler} /><br></br>
                        {errors.confirmPassword.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}<br />

                        <label>Mobile Number :</label> <input type="text" name="mobile" id="mob" onChange={this.handler} /><br></br>
                        {errors.mobile.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.mobile}</span>}<br />

                        <label>Alternate Mobile Number :</label> <input type="text" name="Amobile" id="Amobile"  onChange={this.handler} /><br></br>
                        {errors.Amobile.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Amobile}</span>}<br />

                        <label>Enter Your Qualification :</label> <input type="text" name="quali" id="quali" onChange={this.handler} /><br></br>
                        {errors.quali.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.quali}</span>}<br />

                        <label>Enter Your College Name :</label> <input type="text" name="cName" id="cName" onChange={this.handler} /><br></br>
                        {errors.cName.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.cName}</span>}<br />

                        <label>Enter Your Passout year :</label> <input type="text" name="passout" id="passout" onChange={this.handler} /><br></br>
                        {errors.passout.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.passout}</span>}<br />

                        <label>Enter Your Address :</label> <input name="add" id="add" onChange={this.handler}/><br></br>
                        {errors.add.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.add}</span>}<br />

                        <label>Enter Yout City Name :</label> <input type="text" name="city" id="Cname" onChange={this.handler} /><br></br>
                        {errors.city.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.city}</span>}<br />

                        <label>Enter Your Pin Code :</label> <input type="text" name="pin" id="pin" onChange={this.handler} /><br></br>
                        {errors.pin.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.pin}</span>}<br />

                        <label>Enter Your State :</label> <input type="text" name="state" id="state" onChange={this.handler} /><br></br>
                        {errors.state.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.state}</span>}<br />


                        <label>Enter Your No of Experience :</label> <input type="text" name="exp" id="exp" onChange={this.handler} /><br></br>
                        {errors.exp.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.exp}</span>}<br />

                        <label>Enter Your Intrests :</label> <input type="text" name="intr" id="intr" onChange={this.handler} /><br></br>
                        {errors.intr.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.intr}</span>}<br />

            <div className="box">   
                        <input type="checkbox"  style={{ position:"relative"}} name="con" onChange={this.handler} id="checks" /> <span style={{ color: "white", position: "relative", top: "0px", left: "12px" }}>Please Agree to the terms and conditions </span>
                        {errors.con.length > 0 &&
                            <span style={{ color: 'red',position: "relative", top: "0px", left: "12px" }}>{errors.con}</span>}<br />
                        </div> 

                         <div className="box">

                            <input type="checkbox" onChange={this.toggle} name="" id="check" style={{ boder: "2px solid white", position: "relative", top: "px", fontSize: "18px" }} />
                            <span style={{ color: "white", position: "relative", top: "0px", left: "12px" }}>Show Password</span>
                        </div> 
                        <button className="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        )
    }
}

export default Validations
