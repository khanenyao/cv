import React from 'react';

const styles = {
    link: {
        color: 'deepskyblue',
        cursor: 'pointer',
        textDecoration: 'underline',
    }
};

const navigate = (url, newTab) => {
    if (url) {
        if (newTab) { 
            const win =  window.open(url, '_blank');
            win.focus();
        } else {
            window.location.href = url;
        }
    }
};

const Link = ({children, href, style, newTab=true}) => (
    <span
        style={href && styles.link}
        onClick={() => navigate(href, newTab)}
    >
        {children}
    </span>
);

export default Link;
