import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RocketList extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        availableCount: PropTypes.number.isRequired,
        children: PropTypes.node
    };

    render() {
        const { count, availableCount, children } = this.props;
        return (
            <div>
                <h1>List of rockets</h1>
                <h2>
                    Currently there are {count} of rockets, {availableCount} of
                    them are active.
                </h2>
                {children}
            </div>
        );
    }
}