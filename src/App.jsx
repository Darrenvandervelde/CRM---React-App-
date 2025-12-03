import React, { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [currentUser, setCurrentUser] = useState("Alice Johnson");

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return (
          <div id="BackgroundImage">
          <div className="home">
            <h2>Welcome to Nexa Lite</h2>
            <p>
              Nexa is a simple management dashboard that helps you organize students, track invoices, 
              and monitor payments all in one place. Use the navigation bar to explore each section 
              and manage your data efficiently.
            </p>
          </div>
          </div>
        );

      case "Students":
        return (
          <div className="students">
            <div id="btnContainer" className="btnContainer">
              <button id="Add-btn-Student" className="Add-btn-Style">Add Student</button>
              <button id="Add-btn-Student" className="Add-btn-Style">Edit Student</button>
            </div>
            
            <div id="Table-Style" className="Table-Style">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Outstanding</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty row */}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        );

      case "Invoices":
        return (
          <div className="invoices">
            <h2>Invoices Section</h2>
            <table>
              <thead>
                <tr>
                  <th>Date Due</th>
                  <th>Invoice No.</th>
                  <th>Content</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-12-01</td>
                  <td>#001</td>
                  <td>Website Design</td>
                  <td style={{ textAlign: "center" }}>
                    <a href="/">View</a>
                  </td>
                </tr>
                <tr>
                  <td>2025-12-05</td>
                  <td>#002</td>
                  <td>Hosting Services</td>
                  <td style={{ textAlign: "center" }}>
                    <a href="/">View</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Payments":
        return (
          <div className="payments">
            <h2>Payments Section</h2>
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P001</td>
                  <td>2025-12-02</td>
                  <td>$100</td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <td>P002</td>
                  <td>2025-12-06</td>
                  <td>$250</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return <h2>Welcome to Nexa</h2>;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Nexa Lite</div>
        <ul className="nav-links">
          <li><button onClick={() => setActivePage("Home")}>Home</button></li>
          <li><button onClick={() => setActivePage("Students")}>Students</button></li>
          <li><button onClick={() => setActivePage("Invoices")}>Invoices</button></li>
          <li><button onClick={() => setActivePage("Payments")}>Payments</button></li>
        </ul>
        <div id="UserName" className="UserName">
          <p>{currentUser}</p>
        </div>
      </nav>

      <section id="mainContent" className="mainContent">
        
        {renderContent()}
        
      </section>
    </div>
  );
}

export default App;
