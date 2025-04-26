import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="d-flex flex-column justify-content-end align-items-center min-vh-100 p-4 bg-light text-center">
      <div className="mb-4">
        <h2 className="fw-bold">Welcome to PopX</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
        </p>
      </div>

      <div className="w-100">
        <Link to="/register">
          <button className="btn btn-primary w-100 mb-2" style={{ backgroundColor: "#6A0DAD", border: "none" }}>
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button className="btn w-100" style={{ backgroundColor: "#D6B4FC", color: "#6A0DAD", fontWeight: "bold" }}>
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
