import React, { useState } from 'react';

const OnOffButton = ({ innername, isOn, handleChange }) => {
    return (
        <div className="onoffbtn">
            <input
                checked={isOn}
                onChange={handleChange}
                type="checkbox"
                className="onoffbtn-input"
                name="toggle"
                id="onoffbtn"
            />
            <label htmlFor="onoffbtn" className="onoffbtn-label">
                {innername}
            </label>
        </div>
    );
};

export default OnOffButton;
