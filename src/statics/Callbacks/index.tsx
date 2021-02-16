import { createCallbackHandler } from "./callbacks";

const docsCallbacks = createCallbackHandler({
    plugins: {
        alert_info: () => {
            const data = {
                id: "alert_base_dialog",
                type: "Info",
                options: {
                    title: "Information",
                    message: "Here is some message for the user",
                    onOk: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User confirmed");
                    }
                }
            }
            window.$cui.emit("alert", '~alert-plugin', data);
        },
        alert_ok_cancel: () => {
            const data = {
                id: "alert_oc_dialog",
                type: "OkCancel",
                options: {
                    title: "Confirm",
                    message: "Here is some message for the user to confirm some action",
                    onOk: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User confirmed");
                    },
                    onCancel: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User canceled");
                    }
                }
            }
            window.$cui.emit("alert", '~alert-plugin', data);
        },
        alert_yes_no_cancel: () => {
            const data = {
                id: "alert_ync_dialog",
                type: "YesNoCancel",
                options: {
                    title: "Decision",
                    message: "Here is some message for the user to make some decision",
                    onYes: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User agreed");
                    },
                    onNo: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User disagreed");
                    },
                    onCancel: () => {
                        window.$cui.emit("toast", '~toast-plugin', "User canceled");
                    }
                }
            }
            window.$cui.emit("alert", '~alert-plugin', data);
        },
        toast: () => {
            window.$cui.emit("toast", '~toast-plugin', "Lorem ipsum");
        },
        notify_base: () => {
            window.$cui.emit("notify", '~notification-plugin', {
                id: 'notify-001' + Math.random(),
                title: "Notification"
            });
        },
        notify_description: () => {
            window.$cui.emit("notify", '~notification-plugin', {
                id: 'notify-002' + Math.random(),
                title: "Notification",
                message: "Notification message"
            });
        },
        notify_type: () => {
            window.$cui.emit("notify", '~notification-plugin', {
                id: 'notify-003' + Math.random(),
                title: "Notification success",
                type: "success"
            });
        },
        notify_action: () => {
            window.$cui.emit("notify", '~notification-plugin', {
                id: 'notify-004' + Math.random(),
                title: "Notification",
                actions: [
                    {
                        name: "Toast",
                        callback: () => {
                            window.$cui.emit("toast", '~toast-plugin', "From notify");
                        }
                    }
                ]
            });
        },
        notify_no_close: () => {
            window.$cui.emit("notify", '~notification-plugin', {
                id: 'notify-005' + Math.random(),
                title: "No auto close",
                auto: false
            });
        }
    }
})

export default docsCallbacks;