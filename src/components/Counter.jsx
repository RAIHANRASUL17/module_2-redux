import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const {count} = useSelector((state) => state.counter)
    // console.log(count)
    const dispatch = useDispatch();

    return (
        <div>
            <button className="btn bg-teal-500 text-white p-2 my-5"  onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <button className="btn bg-teal-500 text-white p-2"  onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <div>
                <h1 className="text-6xl font-bold">{count}</h1>
            </div>
            <button className="btn bg-red-500 text-white p-2" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;