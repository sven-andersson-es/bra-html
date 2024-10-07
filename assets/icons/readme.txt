SVG file specification

SVG element should not have set width and height.
SVG element has to have obligatory id="icon"
For color use: fill="currentColor"

Example "plane-up.svg":
<svg id="icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    d="M2.23,2.81H4.85L5.62,0H3M0,11.2H2.59l1.61-6H1.61Z"
  />
</svg>
    


Usage in HTML

<svg class="icon"><use href="/assets/icons/plane-up.svg#icon"/></svg>