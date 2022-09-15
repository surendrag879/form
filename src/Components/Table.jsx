import './style.css';
import React, { useState ,useEffect} from 'react';
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function TableData() {
    const [show, handleShow] = useState(false);
    const [item, setItem] =useState([]);


    const handleState = (status) => {
        handleShow(!show);
    };

 
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('FormData'));
        if (items) {
            setItem(items);
        }
      }, []);
        const Remove = () => {
        localStorage.removeItem('FormData');
      
    }
    console.log(item)
    return (
        <Table>
            <thead>
                <tr>
                    <th> UserName </th>
                    <th> Email </th>
                    <th>Password</th>
                    <th className='ActionTag'> Actions </th>
                </tr>
            </thead>
            <tbody>

                {/* Loops require to render list */}
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>

                    <td style={{ display: "flex" }} >

                        <Button className="btn-update" variant="primary"
                            onClick={() => { handleState(true) }}> Update
                        </Button>

                        <Button className="btn-submit" variant="danger"
                            onClick={() => { Remove() }} >Delete
                        </Button>

                    </td>
                </tr>
            </tbody>


            {/* Update Modal box */}
            <Modal show={show} onHide={() => handleState(false)}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="text" placeholder="enter name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPass">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password" placeholder="enter password" />
                    </Form.Group>

                    <Button variant="success" type="submit" > Save changes </Button>
                    <Button variant="primary" type="reset" > Reset </Button>

                </Form>
            </Modal>
        </Table>
    );
}