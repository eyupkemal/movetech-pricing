import React from 'react';
import clsx from 'clsx';
import { AlertCircle } from 'lucide-react';
import './Input.css';

export default function Input({
    label,
    error,
    icon: Icon,
    className,
    ...props
}) {
    return (
        <div className={clsx('input-group', className)}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                {Icon && <Icon size={20} className="input-icon left" />}
                <input
                    className={clsx(
                        'input-field',
                        Icon && 'has-icon-left',
                        error && 'has-error'
                    )}
                    {...props}
                />
                {error && <AlertCircle size={20} className="input-icon right text-error" />}
            </div>
            {error && <span className="input-error-msg">{error}</span>}
        </div>
    );
}
