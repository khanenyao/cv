import React from 'react';
import { compose } from 'ramda';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import GetApp from 'material-ui/svg-icons/action/get-app';

import withMui from '../../decorators/withMui';

const getStyles = ({ muiTheme: { fontFamily } }) => ({
    container: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: '1100',
        fontFamily,
    },
    appBar: {
        backgroundColor: '#009688',
        boxShadow: 'none',
        position: 'inherit',
        height: 40,
    },
    titleStyle: {
        height: 40,
    },
    moreVertIcon: {
        color: '#fff',
    },
    profile: {
        backgroundColor: '#009688',
        color: '#fff',
        height: 'max-content',
        display: 'flex',
        marginBottom: 100,
        position: 'fixed',
        top: 40,
        width: '100%',
        zIndex: '1100',
        paddingBottom: 12,
    },
    avatar: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: -30,
    },
    avatarSize: 80,
    nameContainer: {
        marginRight: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 300,

    },
    desription: {
        fontSize: 14,
    },
});

const Header = ({ styles }) => (
    <div style={styles.container}>
        <AppBar
            showMenuIconButton={false}
            iconElementRight={<GetApp color={styles.moreVertIcon.color} />}
            style={styles.appBar}
            titleStyle={styles.titleStyle}
        />
        <div style={styles.profile}>
            <Avatar src={require('../../images/profile.jpg')} size={styles.avatarSize} style={styles.avatar} />
            <div style={styles.nameContainer}>
                <span style={styles.name}>Orest Khanenya</span>
                <div style={styles.desription}>23 years old developer.</div>
            </div>
        </div>
    </div>
);

export default compose(withMui({ getStyles }))(Header);
