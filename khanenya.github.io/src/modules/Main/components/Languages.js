import React from 'react';
import { compose } from 'ramda';
import PropTypes from 'prop-types';

import withMui from '../../../decorators/withMui';

const getStyles = ({ muiTheme: { fontFamily } }) => ({
    root: {
        display: 'flex',
        margin: '8px 14px',
        flexWrap: 'wrap',
        fontFamily,
    },
    language: {
        margin: '4px 0px',
    },
    proficiency: {
        color: '#727272',
    },
});

const Languages = ({ languages, styles, prepareStyles }) => {
    const needСomma = (i) => languages.length - 1 !== i && <span>,&nbsp;</span>;
    return (
        <div style={(styles.root)}>
            {languages.map(
                ({ language, proficiency }, index) =>
                    <span key={index} style={styles.language}>
                        {language}&nbsp;
                        <span style={styles.proficiency}>({proficiency})</span>{needСomma(index)}
                    </span>
            )}
        </div>
    );
};

Languages.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

export default compose(withMui({ getStyles }))(Languages);