import { useEffect, useState } from "react";
import "../styles/Analytics.css";

function Analytics() {
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    const savedQueues =
      JSON.parse(localStorage.getItem("queues")) || [];
    setQueues(savedQueues);
  }, []);

  const totalQueues = queues.length;

  const totalCustomers = queues.reduce(
    (total, queue) =>
      total + (queue.customers ? queue.customers.length : 0),
    0
  );

  const averageCustomers =
    totalQueues > 0
      ? (totalCustomers / totalQueues).toFixed(1)
      : 0;

  const busiestQueue =
    queues.length > 0
      ? queues.reduce((prev, current) =>
          (current.customers?.length || 0) >
          (prev.customers?.length || 0)
            ? current
            : prev
        )
      : null;

  return (
    <div className="analytics-container">
      <h1>Queue Analytics</h1>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h2>{totalQueues}</h2>
          <p>Total Queues</p>
        </div>

        <div className="analytics-card">
          <h2>{totalCustomers}</h2>
          <p>Total Customers</p>
        </div>

        <div className="analytics-card">
          <h2>{averageCustomers}</h2>
          <p>Average Customers / Queue</p>
        </div>

        <div className="analytics-card">
          <h2>
            {busiestQueue
              ? busiestQueue.name
              : "No Data"}
          </h2>
          <p>Busiest Queue</p>
        </div>
      </div>

      <div className="queue-list">
        <h2>Queue Overview</h2>

        {queues.length === 0 ? (
          <p>No queues created yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Queue</th>
                <th>Customers</th>
              </tr>
            </thead>

            <tbody>
              {queues.map((queue, index) => (
                <tr key={index}>
                  <td>{queue.name}</td>
                  <td>{queue.customers?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Analytics;