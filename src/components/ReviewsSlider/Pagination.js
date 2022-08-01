import React from 'react';
import PaginationDot from './PaginationDot';

class Pagination extends React.Component {
    handleClick = (event, index) => {
        this.props.onChangeIndex(index);
    };

    render() {
        const { index, dots } = this.props;

        const children = [];

        for (let i = 0; i < dots; i += 1) {
            children.push(
                <PaginationDot key={i} index={i} active={i === index} onClick={this.handleClick} />,
            );
        }

        return <div>{children}</div>;
    }
}

export default Pagination;