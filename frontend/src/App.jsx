import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyQueue from "./pages/MyQueue";
import RoleSelection from "./pages/RoleSelection";
import BusinessRegistration from "./pages/BusinessRegistration";
import BusinessDashboard from "./pages/BusinessDashboard";
import CreateQueue from "./pages/CreateQueue";
import ManageQueues from "./pages/ManageQueues";
import EditQueue from "./pages/EditQueue";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/select-role" element={<RoleSelection />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my-queue" element={<MyQueue />} />

      <Route
        path="/business-registration"
        element={<BusinessRegistration />}
      />

      <Route
        path="/business-dashboard"
        element={<BusinessDashboard />}
      />

      <Route
        path="/create-queue"
        element={<CreateQueue />}
      />

      <Route
        path="/manage-queues"
        element={<ManageQueues />}
      />

      <Route
        path="/edit-queue"
        element={<EditQueue />}
      />

      <Route
        path="/customers"
        element={<Customers />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />
    </Routes>
  );
}

export default App;