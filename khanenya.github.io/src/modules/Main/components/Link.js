import React, { Component } from 'react';

const styles = {
    activeLink: {
        color: '#03A9F4',
        cursor: 'pointer',
        textDecoration: 'underline',
    },
    nonActive: {
        color: '#03A9F4',
    },
};

const navigate = (url, newTab) => {
    if (url) {
        if (newTab) {
            const win = window.open(url, '_blank');
            win.focus();
        } else {
            window.location.href = url;
        }
    }
};

class Link extends Component {
    state = {
        isActive: false,
    };

    handleChangeLinkState = () => {
        this.setState((prevState) => ({
            isActive: !prevState.isActive,
        }));
    }

    render() {
        const { children, href, newTab = true } = this.props;
        const { isActive } = this.state;
        return (
            <span
                style={href && (isActive ? styles.activeLink : styles.nonActive)}
                onClick={() => navigate(href, newTab)}
                onMouseEnter={this.handleChangeLinkState}
                onMouseLeave={this.handleChangeLinkState}
            >
                {children}
            </span>
        );
    }
}

export default Link;
