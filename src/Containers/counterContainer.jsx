import React from "react";
import { connect } from "react-redux";
import Counter from "../Components/Counter";
import { incrementCount, decrementCount } from '../Store/actions/counterActions';

class CounterContainer extends React.Component {
    increment = () => {
        const { dispatch } = this.props;
        dispatch(incrementCount());
    };

    decrement = () => {
        const { dispatch } = this.props;
        dispatch(decrementCount());
    };

    render() {
        const { count } = this.props;
        console.log(this.props);

        return (
            <Counter
                value={count}
                onIncrement={this.increment}
                onDecrement={this.decrement}
            />
        );
    }
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);