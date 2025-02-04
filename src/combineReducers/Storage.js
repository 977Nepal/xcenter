export const reduxStore = () => {
    let initState = {}
    return initState
}

export const updateReduxStore = (store) => {
    localStorage.setItem('ReduxStr', JSON.stringify(store.getState()))
}
