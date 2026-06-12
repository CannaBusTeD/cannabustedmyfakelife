import page01 from "@/assets/lyricbook/page-01.png.asset.json";
import page02 from "@/assets/lyricbook/page-02.png.asset.json";

export interface LyricBookPage {
  id: string;
  title: string;
  caption?: string;
  src: string;
}

// Add more pages here as they're uploaded — section will scale automatically.
export const LYRIC_BOOK_PAGES: LyricBookPage[] = [
  { id: "page-01", title: "My Fake Life", caption: "page one", src: page01.url },
  { id: "page-02", title: "My Fake Life", caption: "page two — continued", src: page02.url },
];
