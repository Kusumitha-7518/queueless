import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ManageQueues.css";

function ManageQueues() {
  const [queues, setQueues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQueues =
      JSON.parse(localStorage.getItem("queues")) || [];

    setQueues(savedQueues);
  }, []);

  const deleteQueue = (index) => {
    const updated = [...queues];
    updated.splice(index, 1);

    setQueues(updated);
    localStorage.setItem("queues", JSON.stringify(updated));
  };

  const toggleStatus = (index) => {
    const updated = [...queues];

    updated[index].status =
      updated[index].status === "Active"
        ? "Inactive"
        : "Active";

    setQueues(updated);

    localStorage.setItem("queues", JSON.stringify(updated));
  };

  const editQueue = (index) => {
    localStorage.setItem("editQueueIndex", index);
    navigate("/edit-queue");
  };

  return (
    <div className="manage-page">
      <div className="manage-container">
        <h1>Manage Queues</h1>

        {queues.length === 0 ? (
          <p>No queues created yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Queue</th>
                <th>Type</th>
                <th>Status</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {queues.map((queue, index) => (
                <tr key={index}>
                  <td>{queue.queueName}</td>
                  <td>{queue.queueType}</td>
                  <td>{queue.status}</td>
                  <td>{queue.capacity}</td>

                  <td>
                    <button onClick={() => editQueue(index)}>
                      Edit
                    </button>

                    <button onClick={() => toggleStatus(index)}>
                      {queue.status === "Active"
                        ? "Deactivate"
                        : "Activate"}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteQueue(index)}
                    >
                      Delete
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

export default ManageQueues;