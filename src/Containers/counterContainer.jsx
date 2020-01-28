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
        const { counterState } = this.props;
        console.log(this.props);

        return (
            <Counter
                value={counterState}
                onIncrement={this.increment}
                onDecrement={this.decrement}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        counterState: state.counterState
    }
}

// The component is connected to the redux store
export default connect(mapStateToProps)(CounterContainer);