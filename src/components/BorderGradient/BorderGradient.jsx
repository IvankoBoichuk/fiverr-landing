import './GradientBorderMask.css';
const BorderGradient = ({ children, radius = '12px', padding = '0', gradient = '45deg, purple, orange', className = '', ...props }) => {
    return (
        <div
            className={`gradient-border-mask ${className}`}
            style={{
                '--radius': radius,
                '--padding': padding,
                '--gradient': gradient,
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default BorderGradient;