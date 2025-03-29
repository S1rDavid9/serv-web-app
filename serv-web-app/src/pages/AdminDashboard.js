import React, { useState } from 'react';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faEnvelope, faUsers, faChartLine, faCogs, faUserCheck, faCommentAlt, faServer } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="tab-content active">
                        <h3>Dashboard</h3>
                        <p>Welcome to your admin dashboard. Overview of your system's performance and recent activities.</p>
                        <div className="dashboard-cards">
                            <DashboardCard icon={faUserCheck} title="Active Users" content="450 users currently active" />
                            <DashboardCard icon={faCommentAlt} title="Total Messages" content="1,200 messages this month" />
                            <DashboardCard icon={faServer} title="System Health" content="95% system uptime" />
                        </div>
                    </div>
                );
            case 'messages':
                return <MessageTab />;
            case 'users':
                return <UserTab />;
            case 'reports':
                return <ReportTab />;
            case 'settings':
                return <SettingsTab />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <aside className="sidebar">
                <h2 className="title">Admin Panel</h2>
                <ul className="tabs">
                    <TabButton icon={faGauge} label="Dashboard" onClick={() => setActiveTab('dashboard')} active={activeTab === 'dashboard'} />
                    <TabButton icon={faEnvelope} label="Messages" onClick={() => setActiveTab('messages')} active={activeTab === 'messages'} />
                    <TabButton icon={faUsers} label="Users" onClick={() => setActiveTab('users')} active={activeTab === 'users'} />
                    <TabButton icon={faChartLine} label="Reports" onClick={() => setActiveTab('reports')} active={activeTab === 'reports'} />
                    <TabButton icon={faCogs} label="Settings" onClick={() => setActiveTab('settings')} active={activeTab === 'settings'} />
                </ul>
            </aside>
            <main className="main-content">
                {renderContent()}
            </main>
        </div>
    );
};

// Reusable Components
const TabButton = ({ icon, label, onClick, active }) => (
    <li className={`tab-btn ${active ? 'active' : ''}`} onClick={onClick}>
        <FontAwesomeIcon icon={icon} /> {label}
    </li>
);

const DashboardCard = ({ icon, title, content }) => (
    <div className="card">
        <FontAwesomeIcon icon={icon} className="card-icon" />
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
);

// Placeholder Components for Each Tab
const MessageTab = () => (
    <div className="tab-content">
        <h3>Messages</h3>
        <p>Latest messages from users:</p>
    </div>
);

const UserTab = () => (
    <div className="tab-content">
        <h3>Users</h3>
        <p>Manage users and their roles:</p>
    </div>
);

const ReportTab = () => (
    <div className="tab-content">
        <h3>Reports</h3>
        <p>Generate and analyze reports:</p>
    </div>
);

const SettingsTab = () => (
    <div className="tab-content">
        <h3>Settings</h3>
        <p>Configure your system settings:</p>
    </div>
);

export default AdminDashboard;