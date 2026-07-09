import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BusinessDashboard.css";

function BusinessDashboard() {
  const navigate = useNavigate();

  const [queueCount, setQueueCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const queues =
      JSON.parse(localStorage.getItem("queues")) || [];

    const customers =
      JSON.parse(localStorage.getItem("joinedQueues")) || [];

    setQueueCount(queues.length);
    setCustomerCount(customers.length);
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>QueueLess</h2>

        <ul>
          <li className="active">Dashboard</li>

          <li onClick={() => navigate("/create-queue")}>
            Create Queue
          </li>

          <li onClick={() => navigate("/manage-queues")}>
            Manage Queues
          </li>

          <li onClick={() => navigate("/customers")}>
            Customers
          </li>

          <li onClick={() => navigate("/analytics")}>
            Analytics
          </li>

          <li>Settings</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h1>Business Dashboard</h1>

        <div className="stats">
          <div className="card">
            <h2>{queueCount}</h2>
            <p>Total Queues</p>
          </div>

          <div className="card">
            <h2>{customerCount}</h2>
            <p>Customers Waiting</p>
          </div>

          <div className="card">
            <h2>0</h2>
            <p>Completed Today</p>
          </div>

          <div className="card">
            <h2>--</h2>
            <p>Average Wait Time</p>
          </div>
        </div>

        <div className="actions">
          <button onClick={() => navigate("/create-queue")}>
            Create Queue
          </button>

          <button onClick={() => navigate("/manage-queues")}>
            Manage Queues
          </button>

          <button onClick={() => navigate("/customers")}>
            View Customers
          </button>
        </div>
      </main>
    </div>
  );
}

export default BusinessDashboard;