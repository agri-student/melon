/* =========================================================
   フォトギャラリーのデータ
   ---------------------------------------------------------
   写真を追加・変更するときは、この配列を編集するだけ！

   1. images/ フォルダに写真ファイルを入れる（例：images/mizuyari.jpg）
   2. 下の配列に { } のブロックを1つコピーして追加する
   3. src / caption / category を書き換える

   category（カテゴリ）は次の4つから選びます：
     "seed"    … 種まき・苗
     "care"    … 日々のお世話
     "grow"    … 実りの様子
     "harvest" … 収穫・試食
   ========================================================= */

const GALLERY_PHOTOS = [
  {
    src: "images/placeholder-seed.svg",
    caption: "小さな種を、ひとつぶずつ丁寧にまきました",
    category: "seed",
  },
  {
    src: "images/placeholder-sprout.svg",
    caption: "芽が出た！みんなで発芽を観察",
    category: "seed",
  },
  {
    src: "images/placeholder-water.svg",
    caption: "毎朝の水やりは大切な日課",
    category: "care",
  },
  {
    src: "images/placeholder-prune.svg",
    caption: "わき芽を摘んで、つるを整えます",
    category: "care",
  },
  {
    src: "images/placeholder-flower.svg",
    caption: "黄色い花が咲きました。受粉のお手伝い",
    category: "grow",
  },
  {
    src: "images/placeholder-young.svg",
    caption: "小さな実がふくらみはじめました",
    category: "grow",
  },
  {
    src: "images/placeholder-net.svg",
    caption: "きれいな網目が入ってきた！",
    category: "grow",
  },
  {
    src: "images/placeholder-harvest.svg",
    caption: "いよいよ収穫。ずっしり重いメロン",
    category: "harvest",
  },
  {
    src: "images/placeholder-taste.svg",
    caption: "自分たちで育てたメロン、いただきます！",
    category: "harvest",
  },
];

/* カテゴリ名を日本語ラベルに変換する対応表（ギャラリーのタグ表示に使用） */
const CATEGORY_LABELS = {
  seed: "種まき・苗",
  care: "お世話",
  grow: "実りの様子",
  harvest: "収穫・試食",
};
