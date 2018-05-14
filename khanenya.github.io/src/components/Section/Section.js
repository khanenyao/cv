import React from 'react';

const styles = {
    container: {
        fontFamily: 'sans-serif',
    },
    label: {
        fontSize: 24,
    },
    content: {
        padding: 12,
    }
};

const Section = ({children, icon, label, style}) => (
    <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.label}>{label && label}  {icon && icon}</div>
        <div style={styles.content}>{children}</div>
    </div>
);

export default Section;
