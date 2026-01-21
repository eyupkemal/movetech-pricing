import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';

const modules = [
    { id: 1, name: 'Core Admin', category: 'Core', price: 3500, desc: 'User management, roles, and permissions.' },
    { id: 2, name: 'Fleet Management', category: 'Logistics', price: 4200, desc: 'Track vehicles, drivers, and maintenance schedules.' },
    { id: 3, name: 'Accounting Connector', category: 'Finance', price: 2100, desc: 'Sync with SAP, Oracle, or Xero.' },
    { id: 4, name: 'Warehouse WMS', category: 'WMS', price: 5500, desc: 'Inventory tracking, bin management, and picking.' },
    { id: 5, name: 'CRM Basic', category: 'HR/CRM', price: 1500, desc: 'Customer database and interaction history.' },
    { id: 6, name: 'GPS Tracking', category: 'Logistics', price: 2800, desc: 'Real-time vechicle tracking integration.' },
];

export default function ModuleCatalog() {
    return (
        <div className="flex" style={{ height: 'calc(100vh - 64px)' }}>
            {/* Sidebar Filters */}
            <aside className="w-72 bg-gray-50 border-r border-gray-200 p-6 flex flex-col gap-6 overflow-y-auto">
                <div className="flex justify-between items-center">
                    <h4>Filters</h4>
                    <span className="text-xs text-primary cursor-pointer">Clear All</span>
                </div>

                <div>
                    <h6 className="mb-3 text-gray-500 uppercase tracking-wider text-xs">Categories</h6>
                    <div className="space-y-2">
                        {['Core', 'Logistics', 'Finance', 'HR/CRM', 'WMS'].map(cat => (
                            <label key={cat} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                <input type="checkbox" className="rounded text-primary" /> {cat}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h6 className="mb-3 text-gray-500 uppercase tracking-wider text-xs">Pricing Model</h6>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="price" className="text-primary" /> All
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="price" className="text-primary" /> License
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="price" className="text-primary" /> SaaS
                        </label>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="w-96">
                        <Input icon={Search} placeholder="Search modules..." className="mb-0" />
                    </div>
                    <div className="flex gap-4">
                        <Button variant="secondary" icon={Filter}>Sort by: Name</Button>
                        <Button variant="primary"><Plus size={16} className="mr-2" /> Create Custom Module</Button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {modules.map(mod => (
                        <Card key={mod.id} variant="module" className="relative group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary font-bold">
                                    {mod.name.charAt(0)}
                                </div>
                                <span className="text-xs font-bold text-gray-400">{mod.category}</span>
                            </div>
                            <h4 className="mb-2">{mod.name}</h4>
                            <p className="text-sm text-gray-500 flex-1 mb-4">{mod.desc}</p>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                                <span className="font-bold text-gray-900">€{mod.price.toLocaleString()}</span>
                                <Button size="small">Select</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
