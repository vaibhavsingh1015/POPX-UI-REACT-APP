export default function Settings() {
  return (
    <div className="container p-4 bg-light min-vh-100">
      <h4 className="fw-bold mb-4">Account Settings</h4>

      <div className="d-flex align-items-center mb-3">
        <div className="position-relative">
          <img
            src="/profile.png"
            className="rounded-circle"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
            alt="profile"
          />
          <span
            className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-1"
            style={{ fontSize: "12px" }}
          >
            <i className="bi bi-camera-fill"></i>
          </span>
        </div>
        <div className="ms-3">
          <h6 className="fw-bold mb-1">Marry Doe</h6>
          <p className="text-muted mb-0">Marry@gmail.com</p>
        </div>
      </div>

      <p className="text-muted">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
