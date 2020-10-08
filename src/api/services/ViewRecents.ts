import { RecentItem } from "./models";
import { BpdStorage } from "../../../node_modules/bpd-storage/dist/esm/index";

export interface IViewRecentsService {
    getAllRecents(): RecentItem[];
    setRecents(recent: RecentItem[]): void;
    addRecent(item: RecentItem): void;
    getLastItem(): RecentItem | undefined;
    clearRecents(): void;
}

export class ViewRecentStorageService implements IViewRecentsService {
    #storage: BpdStorage;
    constructor() {
        this.#storage = new BpdStorage("local", "_VIEW_RECENTS");
    }

    getAllRecents(): RecentItem[] {

        return this.#storage.getAny("RECENTS");
    }

    setRecents(recent: RecentItem[]): void {
        this.#storage.setAny("RECENTS", recent);
    }

    addRecent(item: RecentItem): void {
        throw new Error("Method not implemented.");
    }
    getLastItem(): RecentItem {
        throw new Error("Method not implemented.");
    }
    clearRecents(): void {
        this.#storage.clear();
    }
}

export class ViewRecentServiceHandler {
    #service: IViewRecentsService | undefined;
    constructor(service: IViewRecentsService) {
        this.#service = service;
    }
    getService(): IViewRecentsService {
        return this.#service
    }
    setService(service: IViewRecentsService): void {
        this.#service = service;
    }
}