import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        margin: '8px 14px',
        flexWrap: 'wrap',
    },
    dt: {
        flex: '0 0 200px',
    },
    chip: {
        margin: 4,
        height: 24,
    },
    label: {
        lineHeight: '24px',
        fontSize: 12,
        color: '#727272', 
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 4
    },
};

const SkillCategory = ({ categoryName, skills, key }) => (
    <div style={styles.root}>
        <span style={styles.dt}>
            {categoryName}
        </span>
        <span>
            <div style={styles.wrapper}>
                {skills.map(
                    (skill, index) =>
                        <Chip key={`skill-${index}`} style={styles.chip} labelStyle={styles.label}>
                            {skill}
                        </Chip>
                )}
            </div>
        </span>
    </div>
);

export default SkillCategory;
