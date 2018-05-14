import React from  'react';

import Link from './Link';

const styles = {
    container: {
        marginTop: 12,
        marginBottom: 12,
    },
    top: {
        fontSize: 18,
    },
    school: {
        fontWeight: 'bold',
    },
    date: {
        marginRight: 12,
    },
    work: {
        marginTop: 8,
    }
};

const Education = ({date, degree, faculty, school, workName, workUrl}) => (
    <div style={styles.container}>
        <div style={styles.top}>
            <span style={styles.date}>{date}</span>
            <span style={styles.school}>{school}</span>
        </div>
        <div>{faculty}</div>
        <div>{degree}</div>
        {workName && (
            <div style={styles.work}>
                <div>Work: <Link href={workUrl}>{workName}</Link></div>
            </div>
        )}
    </div>
);

export default Education;
