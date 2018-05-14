import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
    container: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    },
    appBar: {
        backgroundColor: 'rgb(96, 125, 139)',
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
        backgroundColor: 'rgb(96, 125, 139)',
        color: '#fff',
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 100,
    },
    avatar: {
        border: 'solid',
        marginLeft: 100,
        marginRight: 100,
    },
    avatarSize: 160,
};

const Header = () => (
    <div style={styles.container}>
        <AppBar
            showMenuIconButton={false}
            iconElementRight={<MoreVertIcon color={styles.moreVertIcon.color} />}
            style={styles.appBar}
            titleStyle={styles.titleStyle}
        />
         <div style={styles.profile}>
            <Avatar src={require('../../images/profile.jpg')} size={styles.avatarSize} style={styles.avatar} />
         </div>
    </div>
);

export default Header;
