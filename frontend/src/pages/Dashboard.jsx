import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const [queues, setQueues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadQueues();
  }, []);

  const loadQueues = () => {
    const savedQueues =
      JSON.parse(localStorage.getItem("queues")) || [];

    const activeQueues = savedQueues.filter(
      (queue) => queue.status === "Active"
    );

    setQueues(activeQueues);
  };

  const joinQueue = (queue) => {
    const joinedQueues =
      JSON.parse(localStorage.getItem("joinedQueues")) || [];

    // Prevent joining the same queue multiple times
    const alreadyJoined = joinedQueues.some(
      (q) =>
        (q.queueName || q.name) ===
        (queue.queueName || queue.name)
    );

    if (alreadyJoined) {
      alert("You have already joined this queue.");
      return;
    }

    const joinedQueue = {
      id: Date.now(),
      queueName: queue.queueName || queue.name || "Unnamed Queue",
      queueType: queue.queueType || "General",
      capacity: queue.capacity || 0,
      serviceTime: queue.serviceTime || 0,
      startTime: queue.startTime || "",
      endTime: queue.endTime || "",
      token: joinedQueues.length + 1,
      joinedAt: new Date().toLocaleTimeString(),
      status: "Waiting",
    };

    joinedQueues.push(joinedQueue);

    localStorage.setItem(
      "joinedQueues",
      JSON.stringify(joinedQueues)
    );

    localStorage.setItem(
      "myQueue",
      JSON.stringify(joinedQueue)
    );

    navigate("/my-queue");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1>Available Queues</h1>

        {queues.length === 0 ? (
          <p>No active queues available.</p>
        ) : (
          <div className="queue-grid">
            {queues.map((queue, index) => (
              <div className="queue-box" key={index}>
                <h2>{queue.queueName || queue.name}</h2>

                <p>
                  <strong>Type:</strong>{" "}
                  {queue.queueType || "General"}
                </p>

                <p>
                  <strong>Capacity:</strong>{" "}
                  {queue.capacity || 0}
                </p>

                <p>
                  <strong>Average Service:</strong>{" "}
                  {queue.serviceTime || 0} mins
                </p>

                <p>
                  <strong>Operating Hours:</strong>{" "}
                  {queue.startTime || "--"} -{" "}
                  {queue.endTime || "--"}
                </p>

                <button onClick={() => joinQueue(queue)}>
                  Join Queue
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;