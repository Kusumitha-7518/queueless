import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateQueue.css";

function EditQueue() {
  const navigate = useNavigate();

  const queues =
    JSON.parse(localStorage.getItem("queues")) || [];

  const index = localStorage.getItem("editQueueIndex");

  if (index === null || !queues[index]) {
    return (
      <div className="queue-page">
        <div className="create-queue-card">
          <h1>No Queue Selected</h1>
          <button onClick={() => navigate("/manage-queues")}>
            Back to Manage Queues
          </button>
        </div>
      </div>
    );
  }

  const [queue, setQueue] = useState(queues[index]);

  const handleChange = (e) => {
    setQueue({
      ...queue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    queues[index] = queue;

    localStorage.setItem(
      "queues",
      JSON.stringify(queues)
    );

    localStorage.removeItem("editQueueIndex");

    alert("Queue updated successfully!");

    navigate("/manage-queues");
  };

  return (
    <div className="queue-page">
      <div className="create-queue-card">
        <h1>Edit Queue</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="queueName"
            value={queue.queueName}
            onChange={handleChange}
            required
          />

          <select
            name="queueType"
            value={queue.queueType}
            onChange={handleChange}
            required
          >
            <option>Walk-In</option>
            <option>Appointment</option>
            <option>Token Based</option>
          </select>

          <input
            type="number"
            name="capacity"
            value={queue.capacity}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="serviceTime"
            value={queue.serviceTime}
            onChange={handleChange}
            required
          />

          <label>Opening Time</label>
          <input
            type="time"
            name="startTime"
            value={queue.startTime}
            onChange={handleChange}
            required
          />

          <label>Closing Time</label>
          <input
            type="time"
            name="endTime"
            value={queue.endTime}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={queue.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditQueue;