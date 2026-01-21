import React from 'react';
import Input from '../common/Input';
import { Building, Globe, User, Mail, Phone, DollarSign, MapPin } from 'lucide-react';

export default function CustomerInfo() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="mb-4">Customer Information</h2>

                <Input label="Company Name" icon={Building} placeholder="Enter company name" />

                <div className="input-group">
                    <label className="input-label">Industry</label>
                    <div className="input-wrapper">
                        <select className="input-field">
                            <option>Logistics</option>
                            <option>Manufacturing</option>
                            <option>Retail</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <label className="input-label">Country</label>
                    <select className="input-field">
                        <option>Germany</option>
                        <option>United Kingdom</option>
                        <option>France</option>
                        <option>Turkey</option>
                    </select>
                </div>

                <Input label="Annual Revenue" icon={DollarSign} type="number" placeholder="0.00" />
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="mb-4">Contact Details</h2>
                <Input label="Contact Person" icon={User} placeholder="Full Name" />
                <Input label="Email" icon={Mail} type="email" placeholder="email@company.com" />
                <Input label="Phone" icon={Phone} type="tel" placeholder="+1 234 567 890" />
                <Input label="Number of Locations" icon={MapPin} type="number" />
            </div>

            <div className="col-span-2 mt-8">
                <h3 className="mb-4">Operation Types</h3>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                        <span>Road Transport</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5" />
                        <span>Sea Transport</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5" />
                        <span>Air Transport</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5" />
                        <span>Warehouse/WMS</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
