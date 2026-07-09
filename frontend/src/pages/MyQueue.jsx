import { useEffect, useState } from "react";
import "../styles/MyQueue.css";

function MyQueue() {
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    loadQueues();

    const interval = setInterval(() => {
      loadQueues();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadQueues = () => {
    const joinedQueues =
      JSON.parse(localStorage.getItem("joinedQueues")) || [];

    joinedQueues.sort((a, b) => a.token - b.token);

    setQueues(joinedQueues);
  };

  const leaveQueue = (id) => {
    const updatedQueues = queues.filter(
      (queue) => queue.id !== id
    );

    setQueues(updatedQueues);

    localStorage.setItem(
      "joinedQueues",
      JSON.stringify(updatedQueues)
    );
  };

  return (
    <div className="myqueue-page">
      <div className="myqueue-container">
        <h1>My Queue</h1>

        {queues.length === 0 ? (
          <p>You haven't joined any queue yet.</p>
        ) : (
          <div className="queue-list">
            {queues.map((queue) => (
              <div className="queue-card" key={queue.id}>
                <h2>{queue.queueName}</h2>

                <p>
                  <strong>Token:</strong> #{queue.token}
                </p>

                <p>
                  <strong>Joined:</strong> {queue.joinedAt}
                </p>

                <p>
                  <strong>Status:</strong>
                  <span
                    className={`status ${queue.status.toLowerCase()}`}
                  >
                    {" "}
                    {queue.status}
                  </span>
                </p>

                <button
                  className="leave-btn"
                  onClick={() => leaveQueue(queue.id)}
                >
                  Leave Queue
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyQueue;