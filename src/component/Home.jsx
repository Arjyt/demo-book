import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBooks } from '../redux/Addslice';



function Home() {
       const [title, settitle] = useState("")
        // const dispatch=useDispatch()

        const handleAddbook=()=>{
            // dispatch(addBooks({title}))
            console.log("added");
            
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
     <div className="main">
       <img src="https://t3.ftcdn.net/jpg/03/21/97/42/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg" alt="" />
       <h1 className='absaluteh1'>Manage Books Like a Pro</h1>
       <div className="second">
        <h1>Your books</h1>
        <button style={{marginLeft:"40px", width:"90px"}} onClick={handleShow}>Add Book</button>
        </div>
        <div className="row">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg" />
      <Card.Body>
        <Card.Title>Add Book</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
      
       </div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(e)=>settitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="description" onChange={(e)=>setbook(e.target.value)} />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddbook}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
     
  )
}

export default Home