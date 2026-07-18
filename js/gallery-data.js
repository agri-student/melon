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
    src: "images/ueru01.jpg",
    caption: "深く植えすぎないよう注意",
    category: "seed",
  },
  {
    src: "images/ueru02.jpg",
    caption: "すくすく育て",
    category: "seed",
  },
  {
    src: "images/seishi01.JPG",
    caption: "病気予防のため、本葉下２枚を摘葉",
    category: "care",
  },
  {
    src: "images/tuihi00.jpg",
    caption: "根の張りをよくするため、化成肥料を施肥",
    category: "care",
  },
  {
    src: "images/tuihi01.JPG",
    caption: "有機肥料を施肥、おいしくなってくれ",
    category: "care",
  },
　 {
    src: "images/yuuin01.jpg",
    caption: "もやい結び、難しい...",
    category: "care",
  },
　{
    src: "images/yuuin02.JPG",
    caption: "ぐんぐん成長中",
    category: "care",
  },
  {
    src: "images/zyuhun01.JPG",
    caption: "黄色い花が咲きました。受粉のお手伝い",
    category: "grow",
  },
  {
    src: "images/zyuhun02.JPG",
    caption: "朝７時半に来て人工授粉中",
    category: "grow",
  },
　{
    src: "images/hukuro01.JPG",
    caption: "日焼け防止のため、新聞紙をかける",
    category: "care",
  },
　{
    src: "images/tamaturi01.JPG",
    caption: "きれいなT字になるように調整中",
    category: "care",
  },
  {
    src: "images/syuukaku01.JPG",
    caption: "念願の収穫",
    category: "harvest",
  },
  {
    src: "images/sisyoku01.JPG",
    caption: "メロン、いただきます！",
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
