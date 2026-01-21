import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { Check } from 'lucide-react';
import './PackageSelection.css';

const PACKAGES = [
    {
        id: 'bronze',
        name: 'Bronze',
        color: '#CD7F32',
        gradient: 'linear-gradient(135deg, #CD7F32 0%, #E6A85C 100%)',
        price: 35,
        license: 8000,
        features: ['Core Modules', '5 Users', 'Email Support', 'Basic Reporting'],
    },
    {
        id: 'silver',
        name: 'Silver',
        color: '#C0C0C0',
        gradient: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)',
        price: 45,
        license: 12000,
        features: ['All Bronze Features', '15 Users', 'Priority Support', 'Advanced Analytics', 'API Access'],
        popular: true,
    },
    {
        id: 'gold',
        name: 'Gold',
        color: '#FFD700',
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        price: 65,
        license: 18000,
        features: ['All Silver Features', 'Unlimited Users', '24/7 Dedicated Support', 'Custom Integrations', 'AI Forecasting'],
    },
];

export default function PackageSelection() {
    const [model, setModel] = React.useState('saas'); // saas | license

    return (
        <div>
            <div className="flex justify-center mb-8 gap-4">
                <div className="bg-white rounded-lg p-1 border border-gray-200 inline-flex shadow-sm">
                    <button
                        className={`px-6 py-2 rounded-md font-medium transition-all ${model === 'saas' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                        onClick={() => setModel('saas')}
                    >
                        SaaS Subscription
                    </button>
                    <button
                        className={`px-6 py-2 rounded-md font-medium transition-all ${model === 'license' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                        onClick={() => setModel('license')}
                    >
                        Perpetual License
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 items-start">
                {PACKAGES.map((pkg) => (
                    <div key={pkg.id} className="relative">
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-md z-10">
                                MOST POPULAR
                            </div>
                        )}
                        <Card
                            className={`package-card ${pkg.popular ? 'transform scale-105 shadow-xl' : ''}`}
                            style={{ borderColor: pkg.color }}
                        >
                            <div
                                className="h-2 w-full absolute top-0 left-0 rounded-t-lg"
                                style={{ background: pkg.gradient }}
                            />

                            <div className="text-center mt-4 mb-6">
                                <h3 className="text-2xl font-bold mb-1" style={{ color: pkg.color }}>{pkg.name}</h3>
                                <p className="text-gray-500 text-sm">Best for growing teams</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-4xl font-bold text-gray-900">
                                    {model === 'saas' ? `€${pkg.price}` : `€${pkg.license.toLocaleString()}`}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">
                                    {model === 'saas' ? 'per user / month' : 'one-time license'}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                        <Check size={16} className="text-success" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full text-white"
                                style={{ background: pkg.gradient }}
                            >
                                Select {pkg.name}
                            </Button>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
