import { useNavigate } from "react-router-dom";
import "../styles/RoleSelection.css";

export default function RoleSelection() {
  const navigate = useNavigate();

 const selectRole = (role) => {
  localStorage.setItem("role", role);

  if (role === "customer") {
    navigate("/dashboard");
  } else {
    navigate("/business-registration");
  }
};

  return (
    <div className="role-container">
      <h1>Select Your Role</h1>

      <p>Choose how you want to use QueueLess.</p>

      <div className="role-cards">

        <div
          className="role-card"
          onClick={() => selectRole("customer")}
        >
          <h2>Customer</h2>

          <p>
            Join queues, book appointments and track waiting time.
          </p>
        </div>

        <div
          className="role-card"
          onClick={() => selectRole("business")}
        >
          <h2>Business</h2>

          <p>
            Manage queues, customers and appointments.
          </p>
        </div>

      </div>
    </div>
  );
}