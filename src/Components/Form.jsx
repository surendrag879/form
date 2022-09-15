import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SignUp() {

    // localStorage data store
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // const [data , setdata] =useState([]);

   
    const handle = (e) => {
        e.preventDefault();
        const formdata ={
            name : Name,
            email :Email,
            password : Password
        }
        // console.log(formdata)
        localStorage.setItem('FormData', JSON.stringify(formdata))
        setName('')
        setEmail('')
        setPassword('')
    
       
    }

    // SignUp & Login Box hide and Show
    const [form, setform] = useState(false);

    return form ? (
        <div className="SignIn-Modal">
            <h2>Sign In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>User Email</Form.Label>
                    <Form.Control type="email" className="form-control"
                        placeholder="enter username" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control"
                        placeholder="enter password" />
                </Form.Group>

                <Button variant="success" type="submit"> Login </Button>
                <div className="SignUp-btn">Don't have an account? <a href="SignUp" onClick={() => setform(!form)}>Register Now</a></div>
            </Form>
        </div>) :

        (<div className="SignUp-Modal">
            <h2>Sign Up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" className="form-control"
                        placeholder="enter username" value={Name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className="form-control"
                        placeholder="Enter email" value={Email}
                        onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' className="form-control"
                        placeholder="enter Password" value={Password}
                        onChange={(e) => setPassword(e.target.value)} />

                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Confirm Your Password</Form.Label>
                    <Form.Control type='password' className="form-control"
                        placeholder="Confirm Your Password" />

                </Form.Group> */}

                <Button variant="success" type="submit" onClick={handle} >
                    Submit
                </Button>

                <Button variant="danger" type="reset"> Cancel </Button>

                <div>
                    <span> Already have an account? <a href='#Login' onClick={() => setform(!form)}> Sign In</a></span>
                </div>
            </Form>
        </div>
        );
}