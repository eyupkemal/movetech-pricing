import React from 'react';
import clsx from 'clsx';

export default function Button({
    variant = 'primary',
    size = 'medium',
    className,
    children,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-md focus:ring-primary",
        secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
        success: "bg-success hover:bg-success-dark text-white shadow-sm hover:shadow-md focus:ring-success",
        danger: "bg-error hover:bg-error-dark text-white shadow-sm hover:shadow-md focus:ring-error",
        icon: "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-full p-2 w-10 h-10",
    };

    const sizes = {
        large: "text-base px-6 py-3",
        medium: "text-sm px-4 py-2.5",
        small: "text-xs px-3 py-2",
    };

    // Override size for icon variant to avoid padding issues if needed, strictly speaking icon button size is fixed in css but here we handle it via sizes or fixed class
    const sizeClass = variant === 'icon' ? '' : sizes[size];

    return (
        <button
            className={clsx(
                baseStyles,
                variants[variant],
                sizeClass,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
