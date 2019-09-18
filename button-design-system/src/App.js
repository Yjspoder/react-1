import React from 'react';
import Button from './btn';


function App() {
    return (
        <>
            <Button
                size="medium"
                label="Button"
                type="primary"
            />

            <Button
                down="downArrow"
                size="medium"
                label="Button"
                type="primary"
            />

            <Button
                size="medium"
                label="Button"
                type="secondary"
            />

            <Button
                size="medium"
                label="Button"
                type="tertiary"
            />

            <Button
                size="small"
                label="Button"
                type="tertiary"
                border="noBorder"
            />

            <Button
                size="small"
                label="Button"
                type="primary"
            />

            <Button
                size="large"
                label="Button"
                type="primary"
            />

            <Button
                size="large"
                label="Button"
                type="tertiary"
            />

            <hr />
        </>
    );
}

export default App;
