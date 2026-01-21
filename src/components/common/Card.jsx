import React from 'react';
import clsx from 'clsx';

export default function Card({
    variant = 'standard',
    className,
    children,
    onClick,
    ...props
}) {
    const baseStyles = "bg-white border border-gray-200 rounded-2xl transition-all duration-200";

    const variants = {
        standard: "p-6 shadow-sm hover:shadow-md",
        kpi: "p-5 h-32 bg-gradient-to-br from-white to-gray-50 flex flex-col justify-between shadow-sm hover:shadow-md border-opacity-60",
        module: "p-5 min-h-[180px] border-2 flex flex-col hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
        package: "p-8 border-[3px] shadow-lg hover:shadow-xl hover:scale-[1.02] rounded-3xl",
    };

    // Helper to handle selected state for module variant if passed via className or logic needs to be lifted. 
    // Assuming className might contain 'selected' or equivalent logic is handled by parent passing specific classes.
    // For now we map standard variants.

    return (
        <div
            className={clsx(
                baseStyles,
                variants[variant],
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
}
