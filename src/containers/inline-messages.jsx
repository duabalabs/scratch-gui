import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    filterInlineAlerts
} from '../reducers/alerts';

import InlineMessageComponent from '../components/alerts/inline-message.jsx';

const InlineMessages = ({
    alertsList,
    className
}) => {
    if (!alertsList) {
        return null;
    }
    // Only display inline alerts here
    const inlineAlerts = filterInlineAlerts(alertsList);
    if (!inlineAlerts || !inlineAlerts.length) {
        return null;
    }

    // Get first alert
    const firstInlineAlert = inlineAlerts[0];
    const {
        content,
        iconSpinner,
        level
    } = firstInlineAlert;

    return (
        <InlineMessageComponent
            className={className}
            content={content}
            iconSpinner={iconSpinner}
            level={level}
        />
    );
};

InlineMessages.propTypes = {
    alertsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['extension', 'standard']).isRequired,
        content: PropTypes.shape({
            message: PropTypes.string.isRequired,
            iconURL: PropTypes.string
        }).isRequired,
        iconSpinner: PropTypes.bool,
        level: PropTypes.oneOf(['info', 'warning', 'error']).isRequired,
        closeButton: PropTypes.bool,
        showOnce: PropTypes.bool
    })),
    className: PropTypes.string
};

const mapStateToProps = state => ({
    alertsList: state.scratchGui.alerts.alertsList
});

export default connect(mapStateToProps)(InlineMessages);
