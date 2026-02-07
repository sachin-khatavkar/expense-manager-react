import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import logo from "./assets/expences.png";  //set
// import'./index.css'

export default function Login(){

    const [show, setShow] = useState(false);

  // ================= ADD MODAL HANDLERS =================
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
    let reg=()=>{
        alert("Signup Here")
    }
    
    return(
    <div>

    {/* ================= New User ================= */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <Form.Control
              type="text"
                placeholder="Enter a Name:" />
                <br />
              <Form.Control
              type="number"
                placeholder="Enter a Mobile:" />
                <br />
                <Form.Control
              type="number"
                placeholder="Opening Balance:" />
                <br />
    
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" >Save</Button>
            </Modal.Footer>
          </Modal>
          
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">
        <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
            <div style={{ textAlign: "center" }}>
  <img src={logo} height={200} width={200} alt="logo" />
</div>

          <h3 className="text-center mb-4">Login</h3>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter mobile number"
            />
          </div>
          <button className="btn btn-primary w-100">          Login
        </button>
        <a href="#" onClick={handleShow}>New User? Signup</a>

        </div>
      </div>
    </div>
    )

}