import page01 from "@/assets/lyricbook/page-01.png.asset.json";
import page02 from "@/assets/lyricbook/page-02.png.asset.json";
import page03 from "@/assets/lyricbook/page-03.png.asset.json";
import page04 from "@/assets/lyricbook/page-04.png.asset.json";
import page05 from "@/assets/lyricbook/page-05.png.asset.json";
import page06 from "@/assets/lyricbook/page-06.png.asset.json";
import page07 from "@/assets/lyricbook/page-07.png.asset.json";
import page08 from "@/assets/lyricbook/page-08.png.asset.json";

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
  { id: "page-03", title: "Where I Fit", caption: "page three", src: page03.url },
  { id: "page-04", title: "Where I Fit", caption: "page four — continued", src: page04.url },
  { id: "page-05", title: "Break The Silence", caption: "page five", src: page05.url },
  { id: "page-06", title: "Break The Silence", caption: "page six — continued", src: page06.url },
  { id: "page-08", title: "I Would Never Say That", caption: "page seven", src: page08.url },
  { id: "page-07", title: "I Would Never Say That", caption: "page eight — continued", src: page07.url },
];
