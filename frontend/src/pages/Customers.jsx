import { useEffect, useState } from "react";
import "../styles/Customers.css";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    let joinedQueues =
      JSON.parse(localStorage.getItem("joinedQueues")) || [];

    // Sort by token number
    joinedQueues.sort((a, b) => a.token - b.token);

    // If nobody is Current, make the first Waiting customer Current
    const hasCurrent = joinedQueues.some(
      (customer) => customer.status === "Current"
    );

    if (!hasCurrent) {
      const firstWaitingIndex = joinedQueues.findIndex(
        (customer) => customer.status === "Waiting"
      );

      if (firstWaitingIndex !== -1) {
        joinedQueues[firstWaitingIndex] = {
          ...joinedQueues[firstWaitingIndex],
          status: "Current",
        };

        localStorage.setItem(
          "joinedQueues",
          JSON.stringify(joinedQueues)
        );
      }
    }

    setCustomers(joinedQueues);
  };

  const saveCustomers = (updatedCustomers) => {
    setCustomers(updatedCustomers);

    localStorage.setItem(
      "joinedQueues",
      JSON.stringify(updatedCustomers)
    );
  };

  const callNext = () => {
    let updatedCustomers = customers.map((customer) =>
      customer.status === "Current"
        ? { ...customer, status: "Completed" }
        : customer
    );

    const nextCustomer = updatedCustomers.find(
      (customer) => customer.status === "Waiting"
    );

    if (nextCustomer) {
      updatedCustomers = updatedCustomers.map((customer) =>
        customer.id === nextCustomer.id
          ? { ...customer, status: "Current" }
          : customer
      );
    }

    saveCustomers(updatedCustomers);
  };

  const completeCurrent = () => {
    let updatedCustomers = customers.map((customer) =>
      customer.status === "Current"
        ? { ...customer, status: "Completed" }
        : customer
    );

    const nextCustomer = updatedCustomers.find(
      (customer) => customer.status === "Waiting"
    );

    if (nextCustomer) {
      updatedCustomers = updatedCustomers.map((customer) =>
        customer.id === nextCustomer.id
          ? { ...customer, status: "Current" }
          : customer
      );
    }

    saveCustomers(updatedCustomers);
  };

  const skipCustomer = (id) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === id
        ? { ...customer, status: "Skipped" }
        : customer
    );

    saveCustomers(updatedCustomers);
  };

  const removeCustomer = (id) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== id
    );

    saveCustomers(updatedCustomers);
  };

  const currentCustomer = customers.find(
    (customer) => customer.status === "Current"
  );

  return (
    <div className="customers-page">
      <div className="customers-container">
        <h1>Queue Management</h1>

        <div className="current-box">
          <h2>Current Token</h2>

          {currentCustomer ? (
            <h1>#{currentCustomer.token}</h1>
          ) : (
            <p>No customer being served</p>
          )}

          <button
            className="call-btn"
            onClick={callNext}
          >
            Call Next
          </button>

          <button
            className="complete-btn"
            onClick={completeCurrent}
          >
            Complete Current
          </button>
        </div>

        {customers.length === 0 ? (
          <p>No customers in queue.</p>
        ) : (
          <table className="customers-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Queue</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>#{customer.token}</td>

                  <td>{customer.queueName}</td>

                  <td>{customer.joinedAt}</td>

                  <td>
                    <span
                      className={`status ${customer.status.toLowerCase()}`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="action-buttons">
                    <button
                      className="remove-btn"
                      onClick={() => skipCustomer(customer.id)}
                    >
                      Skip
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => removeCustomer(customer.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Customers;