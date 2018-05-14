import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
    content: {
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        padding: 24,
        width: 1200,
    },
    topSection: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 12,
    },
    topLabel: {
        fontSize: 36,
        fontFamily: 'sans-serif',
    }
};

const Body = ({ title, children, bottom }) => (
    <div style={styles.container}>
        <div style={styles.content}>
            {title && (
                <div style={styles.topSection}>
                    <span style={styles.topLabel}>{title}</span>
                </div>
            )}
            <div>
                {children}
            </div>
            {bottom && (
                <div>
                    {bottom}
                </div>
            )}
        </div>
    </div>
);

export default Body;