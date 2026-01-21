import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, User, Package } from 'lucide-react';
import './TopNav.css';

export default function TopNav() {
    return (
        <nav className="top-nav">
            <div className="nav-left">
                <div className="logo">
                    <Package size={24} className="text-primary" />
                    <span className="logo-text">MoveTech</span>
                </div>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
                    <NavLink to="/wizard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Quotes</NavLink>
                    <NavLink to="/catalog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Catalog</NavLink>
                </div>
            </div>

            <div className="nav-right">
                <div className="search-container">
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="Search modules, integrations..." className="search-input" />
                </div>
                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <span className="user-name">John Doe</span>
                </div>
            </div>
        </nav>
    );
}
