import React from 'react';

import {
    Step,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import Link from '../../../components/Link';

const styles = {
    school: {
        fontSize: '18px',
    },
    date: {
        color: '#727272',
    },
    work: {
        marginTop: 8,
    }
};

const Education = ({ date, degree, faculty, school, workName, workUrl, onClick, mediaName, mediaUrl, ...rest }) => (
    <Step {...rest}>
        <StepButton onClick={onClick} icon={null}>
            <span style={styles.school}>{school}</span>
        </StepButton>
        <StepContent>
            <span style={styles.date}>{date}</span>
            <p>
                {faculty}
                <br />
                {degree}
            </p>
            {workName && (
                <div style={styles.work}>
                    <div>Thesis: <Link href={workUrl}>{workName}</Link></div>
                </div>
            )}
            {mediaName && (
                <div style={styles.work}>
                   <div>Media: <Link href={mediaUrl}>{mediaName}</Link></div>
                </div>
            )}
        </StepContent>
    </Step>
);
Education.displayName = 'Step';

export default Education;
