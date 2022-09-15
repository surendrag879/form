import './style.css';
import React from 'react';
import { Button, Form } from "react-bootstrap";
// import { useState } from 'react';

export default function PasswordValidation() {

    return (
        <>
            <div className='Validation-Container'>
                <Form>
                    <h1>Password validation</h1>
                    <label className='Validate-label'>Email</label>
                    <input className='Validate-input' type='email' required />

                    <label className='Validate-label'>Password</label>
                    <input className='Validate-input' type='text' required />

                    <label className='Validate-label'>Confirm Password</label>
                    <input className='Validate-input' type='password' />

                    <Button className='btn' variant="success" type="submit"> Login </Button>

                </Form>
            </div>

        </>
    );
}