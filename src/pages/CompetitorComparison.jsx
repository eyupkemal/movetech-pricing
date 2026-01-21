import React from 'react';
import { Check, X, Minus, Star } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function CompetitorComparison() {
    const data = [
        { feature: 'Module Count', movetech: '35+', soft: '35+', siber: '15' },
        { feature: 'License Cost (18 users)', movetech: '€24,500', soft: '€1.8M', siber: '€15,000' },
        { feature: 'SaaS Available', movetech: true, soft: 'Limited', siber: true },
        { feature: 'Setup Time', movetech: '2-4 weeks', soft: '8-12 weeks', siber: '1-2 weeks' },
        { feature: 'User Experience', movetech: 5, soft: 3, siber: 4 },
    ];

    const renderValue = (val) => {
        if (val === true) return <Check className="text-success" />;
        if (val === false) return <X className="text-error" />;
        if (typeof val === 'number') return <div className="flex text-yellow-400">{[...Array(val)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>;
        return val;
    };

    return (
        <div className="container py-8">
            <div className="text-center mb-12">
                <h1>Competitor Analysis & Positioning</h1>
                <p className="text-gray-500 text-lg">Compare MoveTech with leading ERP solutions</p>
            </div>

            <Card className="overflow-hidden p-0 shadow-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="p-6 text-left text-gray-500 font-medium w-1/4">Feature</th>
                            <th className="p-6 text-left text-primary font-bold text-xl w-1/4 bg-primary-light border-x border-primary">MoveTech</th>
                            <th className="p-6 text-left text-gray-700 font-bold text-lg w-1/4">Soft ERP</th>
                            <th className="p-6 text-left text-gray-700 font-bold text-lg w-1/4">Siber Logistics</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-6 font-medium text-gray-700">{row.feature}</td>
                                <td className="p-6 font-semibold text-gray-900 bg-primary-light bg-opacity-10 border-x border-primary border-opacity-10">
                                    {renderValue(row.movetech)}
                                </td>
                                <td className="p-6 text-gray-600">{renderValue(row.soft)}</td>
                                <td className="p-6 text-gray-600">{renderValue(row.siber)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

            <div className="mt-12 grid grid-cols-3 gap-8">
                <Card className="text-center p-8 border-success border-t-4">
                    <h3 className="text-success mb-2">Best ROI</h3>
                    <p className="text-gray-600">MoveTech delivers 300% ROI in year 1 compared to Soft ERP.</p>
                </Card>
                <Card className="text-center p-8 border-primary border-t-4">
                    <h3 className="text-primary mb-2">Fastest Setup</h3>
                    <p className="text-gray-600">Get running in 2-4 weeks, not months.</p>
                </Card>
                <Card className="text-center p-8 border-secondary border-t-4">
                    <h3 className="text-secondary mb-2">Modern Stack</h3>
                    <p className="text-gray-600">Built on latest web tech, fully cloud-native.</p>
                </Card>
            </div>
        </div>
    );
}
