import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateQueue.css";

function CreateQueue() {
  const navigate = useNavigate();

  const [queue, setQueue] = useState({
    queueName: "",
    queueType: "",
    capacity: "",
    serviceTime: "",
    startTime: "",
    endTime: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setQueue({
      ...queue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing queues
    const existingQueues =
      JSON.parse(localStorage.getItem("queues")) || [];

    // Save new queue
    existingQueues.push(queue);

    localStorage.setItem(
      "queues",
      JSON.stringify(existingQueues)
    );

    alert("Queue Created Successfully!");

    navigate("/manage-queues");
  };

  return (
    <div className="queue-page">
      <div className="create-queue-card">
        <h1>Create Queue</h1>

        <p>Create a digital queue for your customers.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="queueName"
            placeholder="Queue Name"
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
            <option value="">Select Queue Type</option>
            <option>Walk-In</option>
            <option>Appointment</option>
            <option>Token Based</option>
          </select>

          <input
            type="number"
            name="capacity"
            placeholder="Maximum Capacity"
            value={queue.capacity}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="serviceTime"
            placeholder="Average Service Time (minutes)"
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

          <button type="submit">Create Queue</button>
        </form>
      </div>
    </div>
  );
}

export default CreateQueue;