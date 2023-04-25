const useState = <T extends any>(inital:T,render:()=>void) => {
    let state = inital
    type setStateActionType<T = any> = T extends any ? (T | (() => T)) : never
    const setState = (setProps:setStateActionType) => {
        if(typeof setProps === 'function' ){
            state = setProps(state)
            render()
        } else {
            state = setProps
            render()
        }
    } 
    return [state, setState]
}
