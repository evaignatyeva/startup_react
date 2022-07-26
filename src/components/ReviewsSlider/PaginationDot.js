import React from 'react';

const styles = {
    root: {
        height: 18,
        width: 18,
        cursor: 'pointer',
        border: 0,
        background: 'none',
        padding: 0,
    },
    dot: {
        backgroundColor: '#c6c2c2',
        height: '14px',
        width: '14px',
        borderRadius: '50%',
        margin: '0px 3px',
    },
    active: {
        backgroundColor: '#c0301c',
    },
};

class PaginationDot extends React.Component {
    handleClick = event => {
        this.props.onClick(event, this.props.index);
    };

    render() {
        const { active } = this.props;

        let styleDot;

        if (active) {
            styleDot = Object.assign({}, styles.dot, styles.active);
        } else {
            styleDot = styles.dot;
        }

        return (
            <button type="button" style={styles.root} onClick={this.handleClick}>
                <div style={styleDot} />
            </button>
        );
    }
}

export default PaginationDot;