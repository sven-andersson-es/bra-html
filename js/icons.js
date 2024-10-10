// Load icons from SVG files located in /assets/icons folder.
// Usage: <icon data-svg="bra--plane-up.svg"></span>
//        <icon data-svg="mdi--cloud.svg"></span>

const folderUrl = '/assets/icons/';
const sheet = window.document.styleSheets[0];

document.querySelectorAll('icon').forEach(el => {
  const filename = el.dataset.svg;
  const cssRule = 'icon[data-svg="' + filename + '"] { --svg: url(' + folderUrl + filename + ') }';
  sheet.insertRule(cssRule, 0);
});
