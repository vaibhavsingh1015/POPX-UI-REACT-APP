/**
 * Register.jsx
 * 
 * This component renders the Create Account page for the PopX UI React App.
 * It includes a form with inputs for user details and a fixed "Create Account" button at the bottom.
 * The form uses Bootstrap classes for styling and layout.
 */

import { useNavigate } from "react-router-dom";

// Register component renders the create account page form
export default function Register() {
  const navigate = useNavigate();

  return (
    // Container with vertical flex layout, centered items, full viewport height, padding, and light background
    <div className="d-flex flex-column justify-content-start align-items-center min-vh-100 p-4 bg-light" style={{ paddingTop: "3rem", position: "relative", paddingBottom: "3rem" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* Page heading */}
        <h2 className="fw-bold mb-4">
          Create your
          <br />
          PopX account
        </h2>

        {/* Registration form */}
        <form style={{ paddingBottom: "4rem" }}>
          {/* Full Name input */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#6A0DAD" }}>
              Full Name*
            </label>
            <input type="text" className="form-control" placeholder="Enter full name" />
          </div>

          {/* Phone Number input */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#6A0DAD" }}>
              Phone Number*
            </label>
            <input type="text" className="form-control" placeholder="Enter phone number" />
          </div>

          {/* Email Address input */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#6A0DAD" }}>
              Email Address*
            </label>
            <input type="email" className="form-control" placeholder="Enter email address" />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#6A0DAD" }}>
              Password*
            </label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          {/* Company Name input */}
          <div className="mb-4">
            <label className="form-label" style={{ color: "#6A0DAD" }}>
              Company Name
            </label>
            <input type="text" className="form-control" placeholder="Enter company name" />
          </div>

          {/* Agency radio buttons */}
          <div className="mb-4">
            <label className="form-label d-block" style={{ color: "#6A0DAD" }}>
              Are you an Agency?*
            </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" id="yes" value="yes" />
              <label className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" id="no" value="no" />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </form>

        {/* Create Account button fixed at bottom */}
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/settings");
          }}
          className="btn btn-primary w-100 position-absolute bottom-0 start-0"
          style={{ backgroundColor: "#6A0DAD", border: "none" }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
