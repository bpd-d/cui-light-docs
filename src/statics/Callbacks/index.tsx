import { createCallbackHandler } from "./callbacks";

const docsCallbacks = createCallbackHandler({
    plugins: {
        alert: () => {
            window.$cui.emit("alert", '~alert-plugin', "Alert");
        },
        toast: () => {
            window.$cui.emit("toast", '~toast-plugin', "Lorem ipsum");
        }
    }
})

export default docsCallbacks;