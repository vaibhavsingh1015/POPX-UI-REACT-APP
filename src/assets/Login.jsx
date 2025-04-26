import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-start align-items-center min-vh-100 p-4 bg-light" style={{ paddingTop: "5rem" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="fw-bold mb-3">
          Sign in to your
          <br />
          PopX account
        </h2>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form>
          <div className="position-relative mb-4">
            <label
              htmlFor="email"
              className="position-absolute top-0 start-0 translate-middle-y px-2"
              style={{ backgroundColor: "#f8f9fa", color: "#6A0DAD", fontSize: "0.9rem" }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control pt-3"
              placeholder="Enter email address"
              style={{ backgroundColor: "#f8f9fa" }}
            />
          </div>

          <div className="position-relative mb-4">
            <label
              htmlFor="password"
              className="position-absolute top-0 start-0 translate-middle-y px-2"
              style={{ backgroundColor: "#f8f9fa", color: "#6A0DAD", fontSize: "0.9rem" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control pt-3"
              placeholder="Enter password"
              style={{ backgroundColor: "#f8f9fa" }}
            />
          </div>

          <button className="btn w-100" style={{ backgroundColor: "#D3D3D3", color: "white" }} disabled>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
