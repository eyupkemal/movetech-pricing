import React, { useState } from 'react';
import Stepper from '../components/common/Stepper';
import Button from '../components/common/Button';
import CustomerInfo from '../components/wizard/CustomerInfo';
import PackageSelection from '../components/wizard/PackageSelection';


const STEPS = [
    { label: 'Customer' },
    { label: 'Package' },
    { label: 'Modules' },
    { label: 'Integrations' },
    { label: 'Services' },
    { label: 'Review' },
];

export default function QuoteWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        if (currentStep < STEPS.length) setCurrentStep(c => c + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(c => c - 1);
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-64px)] pb-20 bg-gray-50">
            <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
                <Stepper steps={STEPS} currentStep={currentStep} />
            </div>

            <div className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                {currentStep === 1 && <CustomerInfo />}
                {currentStep === 2 && <PackageSelection />}
                {currentStep === 3 && <div className="text-center p-12 text-gray-500">Module Selection (Coming Soon)</div>}
                {currentStep === 4 && <div className="text-center p-12 text-gray-500">Integrations (Coming Soon)</div>}
                {currentStep === 5 && <div className="text-center p-12 text-gray-500">Services (Coming Soon)</div>}
                {currentStep === 6 && <div className="text-center p-12 text-gray-500">Review (Coming Soon)</div>}
            </div>

            <footer className="fixed bottom-0 left-0 right-0 h-[72px] bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex items-center">
                <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
                    <Button
                        variant="secondary"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="min-w-[100px]"
                    >
                        Back
                    </Button>
                    <div className="flex gap-4 items-center">
                        <span className="text-sm font-medium text-gray-500 hidden sm:inline">Step {currentStep} of {STEPS.length}</span>
                        <Button variant="secondary" className="hidden sm:inline-flex">Save Draft</Button>
                        <Button variant="primary" onClick={handleNext} className="min-w-[120px]">
                            {currentStep === STEPS.length ? 'Generate Quote' : 'Next'}
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
