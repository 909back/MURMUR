"use strict";
const useState = (inital, render) => {
    let state = inital;
    const setState = (setProps) => {
        if (typeof setProps === 'function') {
            state = setProps(state);
            render();
        }
        else {
            state = setProps;
            render();
        }
    };
    return [state, setState];
};
