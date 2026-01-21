import React from 'react';
import { Plus, Users, TrendingUp, FileText, ArrowUpRight, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const kpiData = [
    { title: "Total Quotes", value: "1,245", trend: "+12.5%", trendUp: true, icon: FileText },
    { title: "Avg Quote Value", value: "€12.5k", trend: "+5.2%", trendUp: true, icon: TrendingUp },
    { title: "Conversion Rate", value: "24%", trend: "-1.2%", trendUp: false, icon: ArrowUpRight },
    { title: "Active Opportunities", value: "38", trend: "+4", trendUp: true, icon: Users },
];

const openQuotes = [
    { id: "QT-2025-1234", customer: "LogiTrans GmbH", date: "2 days ago", value: "€24,500", status: "Draft" },
    { id: "QT-2025-1233", customer: "FastTrack Logistics", date: "3 days ago", value: "€18,200", status: "Sent" },
    { id: "QT-2025-1232", customer: "Global Cargo", date: "5 days ago", value: "€45,000", status: "Approved" },
    { id: "QT-2025-1231", customer: "Speedy Delivery", date: "1 week ago", value: "€8,900", status: "Pending" },
];

const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
];

const pieData = [
    { name: 'Bronze', value: 300 },
    { name: 'Silver', value: 500 },
    { name: 'Gold', value: 200 },
];
const COLORS = ['#CD7F32', '#C0C0C0', '#FFD700'];

import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="p-6 lg:p-10 min-h-screen bg-gray-50 font-sans text-gray-900">
            <header className="mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back, Eyup!</h1>
                        <p className="text-gray-500 mt-1">Last login: Dec 11, 2025, 09:00</p>
                    </div>
                    <Button
                        variant="primary"
                        size="large"
                        className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        onClick={() => navigate('/wizard')}
                    >
                        <Plus size={20} className="mr-2" /> Create New Quote
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 max-w-[1600px] mx-auto">
                <main className="flex flex-col gap-8 min-w-0">
                    {/* KPI Section */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {kpiData.map((kpi, index) => (
                            <Card key={index} variant="kpi" className="group">
                                <div className="flex justify-between items-start">
                                    <span className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors">{kpi.title}</span>
                                    <kpi.icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{kpi.value}</h2>
                                    <div className={`text-xs flex items-center mt-1 font-medium ${kpi.trendUp ? 'text-success' : 'text-error'}`}>
                                        {kpi.trend} vs last month
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </section>

                    {/* Recent Quotes */}
                    <section>
                        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                            <h2 className="text-xl font-semibold text-gray-900">Recent Quotes</h2>
                            <div className="flex gap-2">
                                <Button variant="secondary" size="small" className="font-normal">All</Button>
                                <Button variant="secondary" size="small" className="font-normal text-gray-500">Draft</Button>
                                <Button variant="secondary" size="small" className="font-normal text-gray-500">Sent</Button>
                            </div>
                        </div>

                        <Card className="overflow-hidden p-0 border-0 shadow-md">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50/50 border-b border-gray-100">
                                        <tr>
                                            <th className="p-4 pl-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quote ID</th>
                                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Value</th>
                                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {openQuotes.map((quote) => (
                                            <tr key={quote.id} className="group hover:bg-gray-50/80 transition-colors">
                                                <td className="p-4 pl-6 font-mono text-sm text-primary font-medium group-hover:underline cursor-pointer">{quote.id}</td>
                                                <td className="p-4 text-sm font-medium text-gray-900">{quote.customer}</td>
                                                <td className="p-4 text-sm text-gray-500">{quote.date}</td>
                                                <td className="p-4 text-sm text-right font-mono font-medium text-gray-900">{quote.value}</td>
                                                <td className="p-4"><Badge status={quote.status} /></td>
                                                <td className="p-4 text-right pr-6">
                                                    <Button variant="icon" size="small" className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={16} /></Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </section>

                    {/* Charts */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="mb-6 text-lg font-semibold text-gray-900">Monthly Quote Trend</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                            cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                                        />
                                        <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={3} dot={{ r: 4, fill: '#2563EB', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 6, strokeWidth: 0 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h3 className="mb-6 text-lg font-semibold text-gray-900">Quotes by Package</h3>
                            <div className="h-72 flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                            cornerRadius={4}
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </section>
                </main>

                <aside className="hidden xl:block w-full">
                    <Card className="sticky top-8 flex flex-col gap-2 p-4">
                        <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wider px-2">Quick Actions</h3>
                        <div className="flex flex-col gap-1">
                            <Button variant="secondary" className="w-full justify-start border-none hover:bg-gray-50 text-gray-600 hover:text-primary font-medium px-3 text-left bg-transparent shadow-none">View Analytics</Button>
                            <Button variant="secondary" className="w-full justify-start border-none hover:bg-gray-50 text-gray-600 hover:text-primary font-medium px-3 text-left bg-transparent shadow-none">Package Builder</Button>
                            <Button variant="secondary" className="w-full justify-start border-none hover:bg-gray-50 text-gray-600 hover:text-primary font-medium px-3 text-left bg-transparent shadow-none">Module Catalog</Button>
                            <Button variant="secondary" className="w-full justify-start border-none hover:bg-gray-50 text-gray-600 hover:text-primary font-medium px-3 text-left bg-transparent shadow-none">Integrations</Button>
                            <Button variant="secondary" className="w-full justify-start border-none hover:bg-gray-50 text-gray-600 hover:text-primary font-medium px-3 text-left bg-transparent shadow-none">Settings</Button>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

function Badge({ status }) {
    const colors = {
        'Draft': 'bg-gray-100 text-gray-700',
        'Sent': 'bg-primary-light text-primary-dark',
        'Approved': 'bg-green-100 text-green-700',
        'Pending': 'bg-yellow-100 text-yellow-800',
    };
    const className = `px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[status] || 'bg-gray-100'}`;
    return <span className={className}>{status}</span>;
}
