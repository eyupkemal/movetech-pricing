import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

export default function Layout() {
    return (
        <div className="app-layout">
            <TopNav />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
