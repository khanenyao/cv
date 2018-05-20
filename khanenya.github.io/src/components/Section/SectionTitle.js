import React from 'react';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
        display: 'flex',
        alignItems: 'center',
    }
};

const SectionTitle = ({ icon, label }) => (
    <span style={styles.root}>
        {icon && <span style={styles.icon}>{icon}</span>}
        {label && label}
    </span>
);

export default SectionTitle;
