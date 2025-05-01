const BorderGradient = ({ radius, gradient, children, ...props }) => {
    return (
        <div className="rounded-sm overflow-hidden w-max">
            <div
                {...props}
                style={{
                    overflow: "hidden",
                    border: '1px solid',
                    borderImage: `linear-gradient(${gradient} 1`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default BorderGradient;