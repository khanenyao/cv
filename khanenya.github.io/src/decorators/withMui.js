import React from 'react';
import PropTypes from 'prop-types';

export default ({ getStyles = () => {} }) => (WrappedComponent) => {
    const WithMui = (props, { muiTheme }) => {
        const newProps = { ...props, muiTheme, prepareStyles: muiTheme.prepareStyles };
        const styles = {...getStyles({ muiTheme })};
        return(<WrappedComponent  {...newProps}  styles={styles} />);
    };
    WithMui.contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
    return WithMui;
};