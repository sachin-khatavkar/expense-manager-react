import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import logo from "./assets/expences.png";  //set
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
// import'./index.css'

export default function Login(){

  const navigate = useNavigate();
  const [nm, setNm] = useState('');
  const [mob, setMob] = useState('0');
  const [opbl, setOpbal] = useState('0');
  const [umob, setUMob] = useState('0');

    const [show, setShow] = useState(false);

  // ================= ADD MODAL HANDLERS =================
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  let hndlnm=(e)=>{setNm(e.target.value)}
  let hndlmob=(e)=>{setMob(e.target.value)}
  let hndlopbal=(e)=>{setOpbal(e.target.value)}
    let hndlumob=(e)=>{setUMob(e.target.value)}
    const { setUser } = useContext(AuthContext);  

    let reg = (e) => {
  e.preventDefault();   // 🔥 VERY IMPORTANT
  alert(nm + " " + mob + " " + opbl);

  axios.post("https://codingshika.com/APP/EXP/add_user.php?mobile="
    +mob+"&uname="+nm+"&opbal="+opbl)
    .then(res=>{
      if(res.data.posts.status=="200"){
        alert("Registerd Success...!")
        setShow(false)
      }else{
        alert ("Failed..!")
        setShow(false)
      }

    })
};

    let login = () => {

 
  axios.post(
    "https://codingshika.com/APP/EXP/user_login.php?mobile=" + umob
  )
  .then(res => {

    if(res.data.posts.status == "200"){
      alert("Login Success...!");
      console.log("Redirecting...");

      console.log(res.data.posts.id);
      console.log(res.data.posts.name);
      localStorage.setItem("id", res.data.posts.id)
      localStorage.setItem("nm", res.data.posts.name)

       setUser({
      id: res.data.posts.id,
      uname: res.data.posts.name
    });

      navigate('/dash');
    } 
    else{
      alert("Failed..!");
    }

  })
  .catch(err=>{
    console.log(err);
  });

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
              type="text" onChange={hndlnm}
                placeholder="Enter a Name:" />
                <br />
              <Form.Control
              type="number" onChange={hndlmob}
                placeholder="Enter a Mobile:" />
                <br />
                <Form.Control
              type="number" onChange={hndlopbal}
                placeholder="Opening Balance:" />
                <br />
    
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={reg} >Save Changes </Button> 
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
              type="number" onChange={hndlumob}
              className="form-control"
              placeholder="Enter mobile number"
            />
          </div>
          <button className="btn btn-primary w-100" onClick={login} >          Login
        </button>
        <a href="#" onClick={handleShow}>New User? Signup</a>
        </div>
      </div>
    </div>
    )

}