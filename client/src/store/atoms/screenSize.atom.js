// store/atoms/screenSize.atom.js
import { atom } from 'recoil';

const screenSizeAtom = atom({
  key: 'screenSize',
  default: window.innerWidth,
});

export default screenSizeAtom;
