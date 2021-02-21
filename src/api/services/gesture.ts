import { calcWindowSize2 } from '../../../node_modules/cui-light-app/dist/esm/core/utils/functions';

export class GestureHandler {
    #resizeEvenId: string | null;
    #gestureEventId: string | null;
    #size: string;
    constructor() {
        this.#resizeEvenId = null;
        this.#gestureEventId = null;
        this.#size = "";

    }

    init() {

        this.#resizeEvenId = window.$cui.on("resize", this.onResize.bind(this))
        this.#gestureEventId = window.$cui.on("gesture-left", this.onGestureLeft.bind(this))
        this.#gestureEventId = window.$cui.on("gesture-right", this.onGestureRight.bind(this))

        this.#size = calcWindowSize2(window.innerWidth);
    }

    destroy() {
        if (this.#resizeEvenId)
            window.$cui.detach('resize', this.#resizeEvenId);
        if (this.#gestureEventId)
            window.$cui.detach('gesture-left', this.#resizeEvenId);
    }

    onResize(ev: any) {
        this.#size = ev.current;
    }


    onGestureLeft(ev: any) {
        console.log(this.#size)
        if (this.#size === 'small' || this.#size === 'none') {
            window.$cui.get('#app-offcanvas').emit('open');
        }
    }

    onGestureRight(ev: any) {
        console.log(this.#size)
        if (this.#size === 'small' || this.#size === 'none') {
            window.$cui.get('#app-offcanvas').emit('close');
        }
    }
}