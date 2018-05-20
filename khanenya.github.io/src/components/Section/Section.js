import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SectionTitle from './SectionTitle';

const styles = {
    root: {
        boxShadow: 'none',
    },
    label: {
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
    },
};

class Section extends Component {
    static propTypes = {
        expandable: PropTypes.bool,
        open: PropTypes.bool,
    };

    static defaultProps = {
        expandable: true,
        open: true,
    };

    state = {
        expanded: this.props.open,
    };

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    render() {
        const { children, expandable, icon, label } = this.props;
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={styles.root}>
                <CardHeader
                    title={<SectionTitle icon={icon} label={label} />}
                    actAsExpander={expandable}
                    showExpandableButton={expandable}
                    titleStyle={styles.label}
                />
                <CardText expandable={true}>
                    {children}
                </CardText>
            </Card>
        );
    }
}

export default Section;
