# 推し活グッズ交換メモアプリ - Express ver

#### 推し活グッズの交換を手動で画像管理するのは大変ではないでしょうか？
#### そこで、もし少しでも便利になれば嬉しいなと思い、このアプリを作成しています。
※開発途中です

## 画面イメージ
### Before（手動管理時）
![before](https://github.com/user-attachments/assets/42fff297-d319-43ca-8e95-5c1277e90cb2)

### After（アプリ画面）
<img width="818" height="781" alt="goods" src="https://github.com/user-attachments/assets/7d328b4d-a9e2-4bbd-9ff4-fedbf00cc6e1" />

## 機能
- シリーズ、メンバー、ステータスを選択するとそれに該当するアイテムが表示される
- 交換済・交渉中・未交換が何枚あるか一目で確認できる


## 開発環境 起動方法メモ
### backend
```zsh
cd backend
npm i
npm run dev
```

### frontend
```zsh
cd frontend
npm i
npm run dev
```
-> http://localhost:3000/goods

### shared
```zsh
cd shared
npx tsc -p tsconfig.types.json
```
-> /dist/types/goods.d.tsがない場合は出力
