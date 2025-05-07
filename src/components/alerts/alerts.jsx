import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box.jsx';
import Alert from '../../containers/alert.jsx';
import styles from './alerts.css';

const AlertsComponent = ({
    alertsList,
    className,
    onCloseAlert
}) => (
    <Box
        bounds="parent"
        className={className}
    >
        <Box className={styles.alertsInnerContainer}>
            {alertsList.map((a, index) => (
                <Alert
                    closeButton={a.closeButton}
                    content={a.content}
                    extensionId={a.extensionId}
                    extensionName={a.extensionName}
                    iconSpinner={a.iconSpinner}
                    iconURL={a.iconURL}
                    index={index}
                    key={a.id || index}
                    level={a.level}
                    message={a.message}
                    showDownload={a.showDownload}
                    showReconnect={a.showReconnect}
                    showSaveNow={a.showSaveNow}
                    onCloseAlert={onCloseAlert}
                />
            ))}
        </Box>
    </Box>
);

AlertsComponent.propTypes = {
    alertsList: PropTypes.arrayOf(
        PropTypes.shape({
            closeButton: PropTypes.bool,
            content: PropTypes.node,
            extensionId: PropTypes.string,
            extensionName: PropTypes.string,
            iconSpinner: PropTypes.bool,
            iconURL: PropTypes.string,
            level: PropTypes.oneOf(['info', 'warning', 'error']),
            message: PropTypes.string,
            showDownload: PropTypes.bool,
            showReconnect: PropTypes.bool,
            showSaveNow: PropTypes.bool,
            id: PropTypes.string
        })
    ),
    className: PropTypes.string,
    onCloseAlert: PropTypes.func.isRequired
};

AlertsComponent.defaultProps = {
    alertsList: [],
    className: ''
};

export default AlertsComponent;
