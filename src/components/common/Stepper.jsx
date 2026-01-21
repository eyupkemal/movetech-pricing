import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import './Stepper.css';

export default function Stepper({ steps, currentStep }) {
    return (
        <div className="stepper-container">
            <div className="stepper-track">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <React.Fragment key={step.label}>
                            <div className="step-item">
                                <div
                                    className={clsx(
                                        'step-circle',
                                        isActive && 'active',
                                        isCompleted && 'completed'
                                    )}
                                >
                                    {isCompleted ? <Check size={20} /> : stepNumber}
                                </div>
                                <span className={clsx('step-label', isActive && 'active')}>
                                    {step.label}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={clsx('step-line', isCompleted && 'completed')} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
