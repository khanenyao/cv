import React from 'react';

const styles = {
    root: {
        margin: '8px 14px',
    },
    date: {
        color: '#727272',
    },
    description: {
        textAlign: 'justify',
    },
};

const Projects = ({ projects }) => (
    <div style={styles.root}>
        {projects.map(
            ({ fromYear, toYear, description }, index) =>
                <div key={index}>
                    <span style={styles.date}>{`${fromYear} - ${toYear}`}</span>
                    <p style={styles.description}>{description}</p>
                </div>
        )}
    </div>
);

export default Projects;
