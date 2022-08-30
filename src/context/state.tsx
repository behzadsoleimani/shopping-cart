import React, { createContext, useContext, useReducer, ReactNode } from "react";
import reducer from "./reducer";
import actions from "./action";
import { IActions, IStateValue, IStateVariables } from "./type";

const initialState: IStateVariables = {
    products: [],
    cart: []
};

const StateContext = createContext<IStateVariables | IActions | null>(null);

const StateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={Object.assign({}, state, actions(state, dispatch))}>
            {children}
        </StateContext.Provider>
    );
};

const useStateValue: any = () => useContext(StateContext);

export {
    initialState,
    StateContext,
    StateProvider,
    useStateValue
};
