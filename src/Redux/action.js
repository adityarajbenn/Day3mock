import myStore from "./store";

function myAction(value){
    myStore.dispatch({
        type:"AUTH",
        payload:value
    })
}
export default myAction;