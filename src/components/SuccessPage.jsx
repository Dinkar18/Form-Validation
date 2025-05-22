import { useLocation, useNavigate } from "react-router-dom";

function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="container mt-5">
        <h3>No data submitted. Please fill the form.</h3>
        <button className="btn btn-primary" onClick={() => navigate("/")}>Go to Form</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Submission Successful</h2>
      <ul className="list-group">
        {Object.entries(state).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{key}: </strong>{value}
          </li>
        ))}
      </ul>

      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
}

export default SuccessPage;
