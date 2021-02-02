export function toast(message: string): void {
    window.$cui.emit("toast", "~toast-plugin", message);
}