// import React, { useState } from 'react';
// import './AdminDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGauge, faEnvelope, faUsers, faChartLine, faCogs, faUserCheck, faCommentAlt, faServer } from '@fortawesome/free-solid-svg-icons';

// const AdminDashboard = () => {
//     const [activeTab, setActiveTab] = useState('dashboard');

//     const renderContent = () => {
//         switch (activeTab) {
//             case 'dashboard':
//                 return (
//                     <div className="tab-content active">
//                         <h3>Dashboard</h3>
//                         <p>Welcome to your admin dashboard. Overview of your system's performance and recent activities.</p>
//                         <div className="dashboard-cards">
//                             <DashboardCard icon={faUserCheck} title="Active Users" content="450 users currently active" />
//                             <DashboardCard icon={faCommentAlt} title="Total Messages" content="1,200 messages this month" />
//                             <DashboardCard icon={faServer} title="System Health" content="95% system uptime" />
//                         </div>
//                     </div>
//                 );
//             case 'messages':
//                 return <MessageTab />;
//             case 'users':
//                 return <UserTab />;
//             case 'reports':
//                 return <ReportTab />;
//             case 'settings':
//                 return <SettingsTab />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="container">
//             <aside className="sidebar">
//                 <h2 className="title">Admin Panel</h2>
//                 <ul className="tabs">
//                     <TabButton icon={faGauge} label="Dashboard" onClick={() => setActiveTab('dashboard')} active={activeTab === 'dashboard'} />
//                     <TabButton icon={faEnvelope} label="Messages" onClick={() => setActiveTab('messages')} active={activeTab === 'messages'} />
//                     <TabButton icon={faUsers} label="Users" onClick={() => setActiveTab('users')} active={activeTab === 'users'} />
//                     <TabButton icon={faChartLine} label="Reports" onClick={() => setActiveTab('reports')} active={activeTab === 'reports'} />
//                     <TabButton icon={faCogs} label="Settings" onClick={() => setActiveTab('settings')} active={activeTab === 'settings'} />
//                 </ul>
//             </aside>
//             <main className="main-content">
//                 {renderContent()}
//             </main>
//         </div>
//     );
// };

// // Reusable Components
// const TabButton = ({ icon, label, onClick, active }) => (
//     <li className={`tab-btn ${active ? 'active' : ''}`} onClick={onClick}>
//         <FontAwesomeIcon icon={icon} /> {label}
//     </li>
// );

// const DashboardCard = ({ icon, title, content }) => (
//     <div className="card">
//         <FontAwesomeIcon icon={icon} className="card-icon" />
//         <h4>{title}</h4>
//         <p>{content}</p>
//     </div>
// );

// // Placeholder Components for Each Tab
// const MessageTab = () => (
//     <div className="tab-content">
//         <h3>Messages</h3>
//         <p>Latest messages from users:</p>
//     </div>
// );

// const UserTab = () => (
//     <div className="tab-content">
//         <h3>Users</h3>
//         <p>Manage users and their roles:</p>
//     </div>
// );

// const ReportTab = () => (
//     <div className="tab-content">
//         <h3>Reports</h3>
//         <p>Generate and analyze reports:</p>
//     </div>
// );

// const SettingsTab = () => (
//     <div className="tab-content">
//         <h3>Settings</h3>
//         <p>Configure your system settings:</p>
//     </div>
// );

// export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faSignOutAlt, faChartPie, faCog } from "@fortawesome/free-solid-svg-icons";
// import "./AdminDashboard.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     profilePicture: "",
//   });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (!storedUser) {
//       navigate("/signin");
//     } else {
//       setUser(storedUser);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     toast.info("Logged out successfully!", {
//       onClose: () => navigate("/signin"),
//     });
//   };

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <h2 className="sidebar-title">Admin Panel</h2>
//         <ul className="sidebar-menu">
//           <li onClick={() => navigate("/profile")} className="sidebar-item">
//             <FontAwesomeIcon icon={faUser} /> Profile
//           </li>
//           <li className="sidebar-item">
//             <FontAwesomeIcon icon={faChartPie} /> Reports
//           </li>
//           <li className="sidebar-item">
//             <FontAwesomeIcon icon={faCog} /> Settings
//           </li>
//           <li onClick={handleLogout} className="sidebar-item logout">
//             <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//           </li>
//         </ul>
//       </aside>
//       <main className="dashboard-main">
//         <div className="dashboard-header">
//           <img
//             src={user.profilePicture || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="profile-pic"
//           />
//           <h2 className="dashboard-welcome">Welcome, {user ? user.fullName : "Guest"}! 🎉</h2>
//         </div>
//         <p className="dashboard-text">Here's an overview of your account and system status.</p>
//         <div className="dashboard-cards">
//           <div className="card">
//             <h3 className="card-title">Total Users</h3>
//             <p className="card-content">1,245 Active Users</p>
//           </div>
//           <div className="card">
//             <h3 className="card-title">New Messages</h3>
//             <p className="card-content">23 Unread Messages</p>
//           </div>
//           <div className="card">
//             <h3 className="card-title">System Health</h3>
//             <p className="card-content">97% Uptime</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faUsers,
  faTools,
  faDashboard,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import "./AdminDashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    profilePicture: "",
  });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ fullName: "", email: "", role: "artisan" });
  const [newService, setNewService] = useState({ name: "", category: "", price: "", description: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/signin");
    } else {
      setUser(storedUser);
    }

    // Mock data - in a real app, you would fetch this from an API
    setUsers([
      { id: 1, fullName: "Uwase Marie", email: "uwase@example.com", role: "artisan", status: "active" },
      { id: 2, fullName: "Mugabo Jean", email: "mugabo@example.com", role: "customer", status: "active" },
      { id: 3, fullName: "Keza Grace", email: "keza@example.com", role: "artisan", status: "inactive" }
    ]);

    setServices([
      { id: 1, name: "Traditional Weaving", category: "Crafts", price: "15000 RWF", artisan: "Uwase Marie", status: "available" },
      { id: 2, name: "Home Painting", category: "Home Services", price: "25000 RWF", artisan: "Keza Grace", status: "booked" },
      { id: 3, name: "Wood Carving", category: "Crafts", price: "20000 RWF", artisan: "Uwase Marie", status: "available" }
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.info("Logged out successfully!", {
      onClose: () => navigate("/signin"),
    });
  };

  const handleAddUser = () => {
    const id = users.length + 1;
    setUsers([...users, { id, ...newUser, status: "active" }]);
    setIsAddUserModalOpen(false);
    setNewUser({ fullName: "", email: "", role: "artisan" });
    toast.success("User added successfully!");
  };

  const handleAddService = () => {
    const id = services.length + 1;
    setServices([...services, { id, ...newService, artisan: user.fullName, status: "available" }]);
    setIsAddServiceModalOpen(false);
    setNewService({ name: "", category: "", price: "", description: "" });
    toast.success("Service added successfully!");
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success("User deleted successfully!");
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
    toast.success("Service deleted successfully!");
  };

  const handleChangeUserStatus = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
    toast.info(`User status changed to ${newStatus}`);
  };

  const handleChangeServiceStatus = (id, newStatus) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, status: newStatus } : service
    ));
    toast.info(`Service status changed to ${newStatus}`);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Serv Admin</h2>
        <ul className="sidebar-menu">
          <li 
            onClick={() => setActiveTab("dashboard")} 
            className={`sidebar-item ${activeTab === "dashboard" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faDashboard} /> Dashboard
          </li>
          <li 
            onClick={() => setActiveTab("users")} 
            className={`sidebar-item ${activeTab === "users" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faUsers} /> Manage Users
          </li>
          <li 
            onClick={() => setActiveTab("services")} 
            className={`sidebar-item ${activeTab === "services" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faTools} /> Manage Services
          </li>
          <li 
            onClick={() => navigate("/profile")} 
            className="sidebar-item"
          >
            <FontAwesomeIcon icon={faUser} /> Profile
          </li>
          <li onClick={handleLogout} className="sidebar-item logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <img
            src={user.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-pic"
          />
          <h2 className="dashboard-welcome">
            Welcome, {user ? user.fullName : "Guest"}! 🎉
          </h2>
        </div>

        {activeTab === "dashboard" && (
          <div className="dashboard-content">
            <p className="dashboard-text">
              Welcome to Serv admin dashboard. Here you can manage users and services for the platform.
            </p>
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Total Artisans</h3>
                <p className="stat-value">{users.filter(u => u.role === "artisan").length}</p>
              </div>
              <div className="stat-card">
                <h3>Total Customers</h3>
                <p className="stat-value">{users.filter(u => u.role === "customer").length}</p>
              </div>
              <div className="stat-card">
                <h3>Available Services</h3>
                <p className="stat-value">{services.filter(s => s.status === "available").length}</p>
              </div>
              <div className="stat-card">
                <h3>Booked Services</h3>
                <p className="stat-value">{services.filter(s => s.status === "booked").length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="dashboard-content">
            <div className="content-header">
              <h3>Manage Users</h3>
              <button className="add-button" onClick={() => setIsAddUserModalOpen(true)}>
                <FontAwesomeIcon icon={faPlus} /> Add User
              </button>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td><span className={`badge ${user.role}`}>{user.role}</span></td>
                      <td><span className={`badge ${user.status}`}>{user.status}</span></td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="status-button"
                            onClick={() => handleChangeUserStatus(user.id, user.status === "active" ? "inactive" : "active")}
                          >
                            {user.status === "active" ? "Deactivate" : "Activate"}
                          </button>
                          <button 
                            className="delete-button"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="dashboard-content">
            <div className="content-header">
              <h3>Manage Services</h3>
              <button className="add-button" onClick={() => setIsAddServiceModalOpen(true)}>
                <FontAwesomeIcon icon={faPlus} /> Add Service
              </button>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Service Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Artisan</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.name}</td>
                      <td>{service.category}</td>
                      <td>{service.price}</td>
                      <td>{service.artisan}</td>
                      <td><span className={`badge ${service.status}`}>{service.status}</span></td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="status-button"
                            onClick={() => handleChangeServiceStatus(service.id, service.status === "available" ? "booked" : "available")}
                          >
                            {service.status === "available" ? "Mark Booked" : "Mark Available"}
                          </button>
                          <button 
                            className="delete-button"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {isAddUserModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Add New User</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={newUser.fullName}
                onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
              >
                <option value="artisan">Artisan</option>
                <option value="customer">Customer</option>
              </select>
              <div className="modal-buttons">
                <button onClick={handleAddUser} className="save-button">Add User</button>
                <button onClick={() => setIsAddUserModalOpen(false)} className="cancel-button">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Add Service Modal */}
        {isAddServiceModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Add New Service</h3>
              <input
                type="text"
                placeholder="Service Name"
                value={newService.name}
                onChange={(e) => setNewService({...newService, name: e.target.value})}
              />
              <select
                value={newService.category}
                onChange={(e) => setNewService({...newService, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="Crafts">Crafts</option>
                <option value="Home Services">Home Services</option>
                <option value="Repairs">Repairs</option>
                <option value="Tailoring">Tailoring</option>
              </select>
              <input
                type="text"
                placeholder="Price (in RWF)"
                value={newService.price}
                onChange={(e) => setNewService({...newService, price: e.target.value})}
              />
              <textarea
                placeholder="Service Description"
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
              ></textarea>
              <div className="modal-buttons">
                <button onClick={handleAddService} className="save-button">Add Service</button>
                <button onClick={() => setIsAddServiceModalOpen(false)} className="cancel-button">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;