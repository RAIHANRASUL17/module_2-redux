const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log("current state=>", currentState)
    console.log("action dispatched=>", action)
    next(action)
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

  export default logger;