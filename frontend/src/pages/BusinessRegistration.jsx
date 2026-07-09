import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BusinessRegistration.css";

function BusinessRegistration() {
  const navigate = useNavigate();

  const [business, setBusiness] = useState({
    businessName: "",
    category: "",
    phone: "",
    email: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(business);

    // Backend API will be connected later
    navigate("/business-dashboard");
  };

  return (
    <div className="business-page">
      <div className="business-card">
        <h1>Register Your Business</h1>

        <p>
          Register your organization and start managing digital queues with
          QueueLess.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={business.businessName}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={business.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Hospital</option>
            <option>Bank</option>
            <option>Salon</option>
            <option>Restaurant</option>
            <option>College</option>
            <option>Government Office</option>
            <option>Clinic</option>
            <option>Other</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={business.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={business.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Business Address"
            value={business.address}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Business Description"
            value={business.description}
            onChange={handleChange}
            rows="4"
          />

          <button type="submit">
            Register Business
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessRegistration;