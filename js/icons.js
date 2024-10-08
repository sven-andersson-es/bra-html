// Load icons from SVG files located in /assets/icons folder.
// Usage: <span class="icon" data-svg="bra--plane-up.svg"></span>
//        <span class="icon" data-svg="mdi--cloud.svg"></span>

const icons = document.querySelectorAll('.icon');
let sheet = window.document.styleSheets[0];

icons.forEach(item => {
  let filename = item.dataset.svg;
  let rule = '.icon[data-svg="' + filename + '"] { --svg: url(/assets/icons/' + filename + ') }';
  sheet.insertRule(rule, 0);
});
