import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dash() {
  const handleLogout = () => {
    alert("Logged out sucessfully");
    //later ypu can add navigate ('/login')
  }
  return (
    <>
   {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm rounded-pill px-4 mx-3 mt-3">
        <span className="navbar-brand fw-bold">{localStorage.getItem('nm')}</span>

        <div className="ms-auto d-flex align-items-center gap-3">
          {/* ROUND CARD ICON */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-white"
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg,#ff7a18,#ffb347)",
            }}
          >
            💳
          </div>

          {/* LOGOUT */}
          <button
            className="btn btn-outline-dark rounded-pill px-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    
    <div className="container py-5">
      {/* Top Cards */}
      <div className="row g-4 mb-4">
        {/* Credit Card */}
        <div className="col-lg-6">
          <div
            className="p-4 text-white rounded-4 shadow"
            style={{
              background: 'linear-gradient(135deg, #141e30, #243b55)',
              minHeight: '220px'
            }}
          >
            <h2 className="fw-bold mb-5">00</h2>

            <div className="d-flex justify-content-between align-items-end">
              <div>
                <small className="text-light">Card Holder</small>
                <h5 className="fw-bold">Sachin Khatavkar</h5>
              </div>

              <div>
                <small className="text-light">Expires</small>
                <h5 className="fw-bold">11/22</h5>
              </div>

              <div>
                <span className="badge bg-danger rounded-circle p-2 me-1"> </span>
                <span className="badge bg-warning rounded-circle p-2"> </span>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Card */}
        <div className="col-md-3">
          <div className="card border-0 shadow rounded-4 text-center p-4 h-100">
            <div
              className="mx-auto mb-3 rounded-4"
              style={{
                width: 70,
                height: 70,
                backgroundColor: 'rgb(23, 116, 16)'
              }}
            ></div>

            <h3 className="fw-bold">Credit</h3>
            <h2 className="fw-bold">00</h2>
            <button className="btn btn-dark rounded-3 px-4">
            Add New Credit
          </button>
          </div>
        </div>

        {/* Paypal Card */}
        <div className="col-md-3">
          <div className="card border-0 shadow rounded-4 text-center p-4 h-100">
            <div
              className="mx-auto mb-3 rounded-4"
              style={{
                width: 70,
                height: 70,
                backgroundColor: 'rgb(255, 24, 24)'
              }}
            ></div>

            <h3 className="fw-bold">Debit</h3>
            <h2 className="fw-bold">00</h2>
            <button className="btn btn-dark rounded-3 px-4">
            Add New Debit
          </button>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="card border-0 shadow rounded-4 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Payment History</h5>
        </div>

        <div className="row g-3">
          <div className="col-md-12">

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
