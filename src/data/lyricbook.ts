import coverFront from "@/assets/lyricbook/cover-front.png.asset.json";
import page01 from "@/assets/lyricbook/page-01.png.asset.json";
import page02 from "@/assets/lyricbook/page-02.png.asset.json";
import page03 from "@/assets/lyricbook/page-03.png.asset.json";
import page04 from "@/assets/lyricbook/page-04.png.asset.json";
import page05 from "@/assets/lyricbook/page-05.png.asset.json";
import page06 from "@/assets/lyricbook/page-06.png.asset.json";
import page07 from "@/assets/lyricbook/page-07.png.asset.json";
import page08 from "@/assets/lyricbook/page-08.png.asset.json";
import page09 from "@/assets/lyricbook/page-09.png.asset.json";
import page10 from "@/assets/lyricbook/page-10.png.asset.json";
import page11 from "@/assets/lyricbook/page-11.png.asset.json";
import page12 from "@/assets/lyricbook/page-12.png.asset.json";
import page13 from "@/assets/lyricbook/page-13.png.asset.json";
import page14 from "@/assets/lyricbook/page-14.png.asset.json";
import page15 from "@/assets/lyricbook/page-15.png.asset.json";
import page16 from "@/assets/lyricbook/page-16.png.asset.json";
import page17 from "@/assets/lyricbook/page-17.png.asset.json";
import page18 from "@/assets/lyricbook/page-18.png.asset.json";
import page19 from "@/assets/lyricbook/page-19.png.asset.json";
import page20 from "@/assets/lyricbook/page-20.png.asset.json";
import page21 from "@/assets/lyricbook/page-21.png.asset.json";
import page22 from "@/assets/lyricbook/page-22.png.asset.json";
import page23 from "@/assets/lyricbook/page-23.png.asset.json";
import page24 from "@/assets/lyricbook/page-24.png.asset.json";
import page25 from "@/assets/lyricbook/page-25.png.asset.json";

export interface LyricBookPage {
  id: string;
  title: string;
  caption?: string;
  src: string;
}

export const LYRIC_BOOK_PAGES: LyricBookPage[] = [
  { id: "cover-front", title: "My Fake Lyrics", caption: "front cover", src: coverFront.url },
  { id: "page-01", title: "My Fake Life", caption: "page one", src: page01.url },
  { id: "page-02", title: "My Fake Life", caption: "page two — continued", src: page02.url },
  { id: "page-03", title: "Where I Fit", caption: "page three", src: page03.url },
  { id: "page-04", title: "Where I Fit", caption: "page four — continued", src: page04.url },
  { id: "page-05", title: "Break The Silence", caption: "page five", src: page05.url },
  { id: "page-06", title: "Break The Silence", caption: "page six — continued", src: page06.url },
  { id: "page-08", title: "I Would Never Say That", caption: "page seven", src: page08.url },
  { id: "page-07", title: "I Would Never Say That", caption: "page eight — continued", src: page07.url },
  { id: "page-09", title: "Quiet The Cruel", caption: "page nine", src: page09.url },
  { id: "page-10", title: "Quiet The Cruel", caption: "page ten — continued", src: page10.url },
  { id: "page-11", title: "Everyone Is a Critic", caption: "page eleven", src: page11.url },
  { id: "page-12", title: "Everyone Is a Critic", caption: "page twelve — continued", src: page12.url },
  { id: "page-13", title: "Artificial Insignificance", caption: "page thirteen", src: page13.url },
  { id: "page-14", title: "Artificial Insignificance", caption: "page fourteen — continued", src: page14.url },
  { id: "page-15", title: "Am I The Problem", caption: "page fifteen", src: page15.url },
  { id: "page-16", title: "Am I The Problem", caption: "page sixteen — continued", src: page16.url },
  { id: "page-17", title: "Every Version Of Me", caption: "page seventeen", src: page17.url },
  { id: "page-18", title: "Every Version Of Me", caption: "page eighteen — continued", src: page18.url },
  { id: "page-19", title: "Everybody Has Nobody", caption: "page nineteen", src: page19.url },
  { id: "page-20", title: "Everybody Has Nobody", caption: "page twenty — continued", src: page20.url },
  { id: "page-21", title: "The Hard Way", caption: "page twenty-one", src: page21.url },
  { id: "page-22", title: "The Hard Way", caption: "page twenty-two — continued", src: page22.url },
  { id: "page-23", title: "Hold Them Loose", caption: "page twenty-three", src: page23.url },
  { id: "page-24", title: "Hold Them Loose", caption: "page twenty-four — continued", src: page24.url },
  { id: "page-25", title: "The Easy Way", caption: "page twenty-five", src: page24.url },
  { id: "page-26", title: "The Easy Way", caption: "page twenty-six — continued", src: page25.url },
];

