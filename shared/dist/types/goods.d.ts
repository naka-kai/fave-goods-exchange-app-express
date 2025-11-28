export type ISODateString = Date;
export type GoodsStatus = "completed" | "negotiating" | "unexchanged";
export type GoodsItem = {
    fromLeft: number;
    num: number;
    status: GoodsStatus;
    createdAt: ISODateString;
    updatedAt: ISODateString;
};
export type GoodsMember = {
    member: string;
    items: GoodsItem[];
};
export type GoodsSeries = {
    id: string;
    title: string;
    members: GoodsMember[];
};
export interface GoodsIndexResponse {
    filtered: GoodsSeries[];
    currentSeries: GoodsSeries;
}
