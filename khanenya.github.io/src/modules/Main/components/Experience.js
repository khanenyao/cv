import React from 'react';
import Link from '../../../components/Link';

const styles = {
    root: { margin: '8px 14px' },
    date: { margin: '4px 0px', color: '#727272' },
    company: {},
    position: {},
    line: { margin: '4px 0px' },
};

const Experience = ({ date, company, position }) => (
    <div style={styles.root}>
        <span style={styles.date}>{date}</span>
        <div style={styles.line}>
            <span style={styles.company}><Link href={company.url}>{company.name}</Link></span> - <span style={styles.position}>{position}</span>
        </div>
    </div>
);

export default Experience;