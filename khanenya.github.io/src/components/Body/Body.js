import React from 'react';
import { compose } from 'ramda';

import withMui from '../../decorators/withMui';

const getStyles = ({ muiTheme: { fontFamily } }) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily,
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
    }
});

const Body = ({ title, children, bottom, styles, prepareStyles, style }) => (
    <div style={prepareStyles(Object.assign({}, styles.container, style))}>
        <div style={prepareStyles(styles.content)}>
            {title && (
                <div style={prepareStyles(styles.topSection)}>
                    <span style={prepareStyles(styles.topLabel)}>{title}</span>
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

export default compose(withMui({ getStyles }))(Body);