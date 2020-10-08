import { RecentItem } from "./models";
export interface IViewRecentsService {
    getAllRecents(): RecentItem[];
    setRecents(recent: RecentItem[]): void;
    addRecent(item: RecentItem): void;
    getLastItem(): RecentItem | undefined;
    clearRecents(): void;
}
export declare class ViewRecentStorageService implements IViewRecentsService {
    #private;
    constructor();
    getAllRecents(): RecentItem[];
    setRecents(recent: RecentItem[]): void;
    addRecent(item: RecentItem): void;
    getLastItem(): RecentItem;
    clearRecents(): void;
}
export declare class ViewRecentServiceHandler {
    #private;
    constructor(service: IViewRecentsService);
    getService(): IViewRecentsService;
    setService(service: IViewRecentsService): void;
}
