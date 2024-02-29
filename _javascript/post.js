import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  toc,
  topToc
} from './modules/plugins';

initSidebar();
initTopbar();
loadImg();
imgPopup();
initLocaleDatetime();
initClipboard();
topToc();
toc();
basic();
