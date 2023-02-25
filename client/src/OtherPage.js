import React from 'react';
import { Link } from "react-router-dom";

const otherPage = () => {
    return (
        <div>
            I'm some other Page
            <Link to="/">Go back to HOME</Link>
        </div>
    );
};
export default otherPage;
