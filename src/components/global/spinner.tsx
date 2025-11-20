import React from "react";

type SpinnerProps = {
    size?: number;
};

const BetterSpinner: React.FC<SpinnerProps> = ({ size = 32 }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={`rounded-full border-4 border-t-transparent border-card-foreground animate-spin`}
                style={{ width: size, height: size }}
                role="status"
                aria-label="Loading"
            ></div>
        </div>
    );
};

export default BetterSpinner;
