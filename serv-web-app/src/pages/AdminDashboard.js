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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faChartPie, faCog } from "@fortawesome/free-solid-svg-icons";
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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/signin");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.info("Logged out successfully!", {
      onClose: () => navigate("/signin"),
    });
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/profile")} className="sidebar-item">
            <FontAwesomeIcon icon={faUser} /> Profile
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faChartPie} /> Reports
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faCog} /> Settings
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
          <h2 className="dashboard-welcome">Welcome, {user ? user.fullName : "Guest"}! 🎉</h2>
        </div>
        <p className="dashboard-text">Here's an overview of your account and system status.</p>
        <div className="dashboard-cards">
          <div className="card">
            <h3 className="card-title">Total Users</h3>
            <p className="card-content">1,245 Active Users</p>
          </div>
          <div className="card">
            <h3 className="card-title">New Messages</h3>
            <p className="card-content">23 Unread Messages</p>
          </div>
          <div className="card">
            <h3 className="card-title">System Health</h3>
            <p className="card-content">97% Uptime</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;