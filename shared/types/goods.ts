// APIで使う日付文字列用の型
export type ISODateString = Date;

// グッズのステータス（交換済み・交渉中・未交換）
export type GoodsStatus = "completed" | "negotiating" | "unexchanged";

// アイテム（例：生写真など左から何番目など数えられるもの）
export type GoodsItem = {
  fromLeft: number;         // 左から何番目か
  num: number;              // 数量
  status: GoodsStatus;      // ステータス
  createdAt: ISODateString; // 作成日
  updatedAt: ISODateString; // 更新日
};

// メンバー
export type GoodsMember = {
  member: string;           // メンバー名
  items: GoodsItem[];       // そのメンバーのアイテム一覧
};

// グッズのシリーズ
export type GoodsSeries = {
  id: string;
  title: string;            // シリーズのタイトル
  members: GoodsMember[];   // そのシリーズに含まれているメンバー一覧
};

// GET /api/v1/goodsのレスポンス
export interface GoodsIndexResponse {
  filtered: GoodsSeries[];
  currentSeries: GoodsSeries;
}