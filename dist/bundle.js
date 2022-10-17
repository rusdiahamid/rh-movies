/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var n = {
      982: (n, t, e) => {
        'use strict';
        e.d(t, { Z: () => c });
        var r = e(81),
          o = e.n(r),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          '/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n:root {\n  --primary: #041c32;\n  --secondary: cornflowerblue;\n}\n\n/* Firefox */\n\n* {\n  scrollbar-width: thin;\n  scrollbar-color: var(--secondary) var(--primary);\n}\n\n/* Chrome, Edge, and Safari */\n\n*::-webkit-scrollbar {\n  width: 5px;\n  height: 8px;\n}\n\n*::-webkit-scrollbar-track {\n  background: var(--primary);\n  border-radius: 5px;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: var(--secondary);\n  border-radius: 14px;\n  border: 3px solid var(--primary);\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.static {\n  position: static;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.min-w-\\[160px\\] {\n  min-width: 160px;\n}\n\n.min-w-\\[200px\\] {\n  min-width: 200px;\n}\n\n.min-w-\\[120px\\] {\n  min-width: 120px;\n}\n\n.max-w-\\[120px\\] {\n  max-width: 120px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.bg-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 28 50 / var(--tw-bg-opacity));\n}\n\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 179 101 / var(--tw-bg-opacity));\n}\n\n.bg-secondary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 70 99 / var(--tw-bg-opacity));\n}\n\n.bg-cover {\n  background-size: cover;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.leading-relaxed {\n  line-height: 1.625;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.movie-container {\n  display: flex;\n  gap: 0.75rem;\n  overflow-x: scroll;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.movie-card {\n  width: 10rem;\n  min-width: 160px;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.movie-card:hover {\n  --tw-translate-y: -0.25rem;\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rating-text {\n  margin-top: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.movie-title {\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.movie-title:hover {\n  cursor: pointer;\n}\n\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.focus\\:ring-primary:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(236 179 101 / var(--tw-ring-opacity));\n}\n\n@media (min-width: 1024px) {\n  .lg\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n}\r\n',
          '',
        ]);
        const c = a;
      },
      645: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  r && (e += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (e += n(t)),
                  r && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, r, o, i) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var u = [].concat(n[l]);
                (r && a[u[0]]) ||
                  (void 0 !== i && (void 0 === u[5] || (u[1] = '@layer'.concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {').concat(u[1], '}')), (u[5] = i)),
                  e && (u[2] ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = e)) : (u[2] = e)),
                  o && (u[4] ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = o)) : (u[4] = ''.concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (n) => {
        'use strict';
        n.exports = function (n) {
          return n[1];
        };
      },
      666: (n) => {
        var t = (function (n) {
          'use strict';
          var t,
            e = Object.prototype,
            r = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            c = o.toStringTag || '@@toStringTag';
          function s(n, t, e) {
            return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
          }
          try {
            s({}, '');
          } catch (n) {
            s = function (n, t, e) {
              return (n[t] = e);
            };
          }
          function l(n, t, e, r) {
            var o = t && t.prototype instanceof g ? t : g,
              i = Object.create(o.prototype),
              a = new z(r || []);
            return (
              (i._invoke = (function (n, t, e) {
                var r = d;
                return function (o, i) {
                  if (r === f) throw new Error('Generator is already running');
                  if (r === p) {
                    if ('throw' === o) throw i;
                    return O();
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = S(a, e);
                      if (c) {
                        if (c === m) continue;
                        return c;
                      }
                    }
                    if ('next' === e.method) e.sent = e._sent = e.arg;
                    else if ('throw' === e.method) {
                      if (r === d) throw ((r = p), e.arg);
                      e.dispatchException(e.arg);
                    } else 'return' === e.method && e.abrupt('return', e.arg);
                    r = f;
                    var s = u(n, t, e);
                    if ('normal' === s.type) {
                      if (((r = e.done ? p : h), s.arg === m)) continue;
                      return { value: s.arg, done: e.done };
                    }
                    'throw' === s.type && ((r = p), (e.method = 'throw'), (e.arg = s.arg));
                  }
                };
              })(n, e, a)),
              i
            );
          }
          function u(n, t, e) {
            try {
              return { type: 'normal', arg: n.call(t, e) };
            } catch (n) {
              return { type: 'throw', arg: n };
            }
          }
          n.wrap = l;
          var d = 'suspendedStart',
            h = 'suspendedYield',
            f = 'executing',
            p = 'completed',
            m = {};
          function g() {}
          function w() {}
          function v() {}
          var y = {};
          s(y, i, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            x = b && b(b(C([])));
          x && x !== e && r.call(x, i) && (y = x);
          var k = (v.prototype = g.prototype = Object.create(y));
          function L(n) {
            ['next', 'throw', 'return'].forEach(function (t) {
              s(n, t, function (n) {
                return this._invoke(t, n);
              });
            });
          }
          function E(n, t) {
            function e(o, i, a, c) {
              var s = u(n[o], n, i);
              if ('throw' !== s.type) {
                var l = s.arg,
                  d = l.value;
                return d && 'object' == typeof d && r.call(d, '__await')
                  ? t.resolve(d.__await).then(
                      function (n) {
                        e('next', n, a, c);
                      },
                      function (n) {
                        e('throw', n, a, c);
                      }
                    )
                  : t.resolve(d).then(
                      function (n) {
                        (l.value = n), a(l);
                      },
                      function (n) {
                        return e('throw', n, a, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            this._invoke = function (n, r) {
              function i() {
                return new t(function (t, o) {
                  e(n, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function S(n, e) {
            var r = n.iterator[e.method];
            if (r === t) {
              if (((e.delegate = null), 'throw' === e.method)) {
                if (n.iterator.return && ((e.method = 'return'), (e.arg = t), S(n, e), 'throw' === e.method)) return m;
                (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
              }
              return m;
            }
            var o = u(r, n.iterator, e.arg);
            if ('throw' === o.type) return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), m;
            var i = o.arg;
            return i
              ? i.done
                ? ((e[n.resultName] = i.value), (e.next = n.nextLoc), 'return' !== e.method && ((e.method = 'next'), (e.arg = t)), (e.delegate = null), m)
                : i
              : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), m);
          }
          function j(n) {
            var t = { tryLoc: n[0] };
            1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
          }
          function _(n) {
            var t = n.completion || {};
            (t.type = 'normal'), delete t.arg, (n.completion = t);
          }
          function z(n) {
            (this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(j, this), this.reset(!0);
          }
          function C(n) {
            if (n) {
              var e = n[i];
              if (e) return e.call(n);
              if ('function' == typeof n.next) return n;
              if (!isNaN(n.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < n.length; ) if (r.call(n, o)) return (e.value = n[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: t, done: !0 };
          }
          return (
            (w.prototype = v),
            s(k, 'constructor', v),
            s(v, 'constructor', w),
            (w.displayName = s(v, c, 'GeneratorFunction')),
            (n.isGeneratorFunction = function (n) {
              var t = 'function' == typeof n && n.constructor;
              return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name));
            }),
            (n.mark = function (n) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(n, v) : ((n.__proto__ = v), s(n, c, 'GeneratorFunction')), (n.prototype = Object.create(k)), n;
            }),
            (n.awrap = function (n) {
              return { __await: n };
            }),
            L(E.prototype),
            s(E.prototype, a, function () {
              return this;
            }),
            (n.AsyncIterator = E),
            (n.async = function (t, e, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(l(t, e, r, o), i);
              return n.isGeneratorFunction(e)
                ? a
                : a.next().then(function (n) {
                    return n.done ? n.value : a.next();
                  });
            }),
            L(k),
            s(k, c, 'Generator'),
            s(k, i, function () {
              return this;
            }),
            s(k, 'toString', function () {
              return '[object Generator]';
            }),
            (n.keys = function (n) {
              var t = [];
              for (var e in n) t.push(e);
              return (
                t.reverse(),
                function e() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in n) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (n.values = C),
            (z.prototype = {
              constructor: z,
              reset: function (n) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = t), this.tryEntries.forEach(_), !n))
                  for (var e in this) 't' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var n = this.tryEntries[0].completion;
                if ('throw' === n.type) throw n.arg;
                return this.rval;
              },
              dispatchException: function (n) {
                if (this.done) throw n;
                var e = this;
                function o(r, o) {
                  return (c.type = 'throw'), (c.arg = n), (e.next = r), o && ((e.method = 'next'), (e.arg = t)), !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ('root' === a.tryLoc) return o('end');
                  if (a.tryLoc <= this.prev) {
                    var s = r.call(a, 'catchLoc'),
                      l = r.call(a, 'finallyLoc');
                    if (s && l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!l) throw new Error('try statement without catch or finally');
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (n, t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var o = this.tryEntries[e];
                  if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === n || 'continue' === n) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (a.type = n), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), m) : this.complete(a);
              },
              complete: function (n, t) {
                if ('throw' === n.type) throw n.arg;
                return (
                  'break' === n.type || 'continue' === n.type ? (this.next = n.arg) : 'return' === n.type ? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === n.type && t && (this.next = t), m
                );
              },
              finish: function (n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), _(e), m;
                }
              },
              catch: function (n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.tryLoc === n) {
                    var r = e.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      _(e);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (n, e, r) {
                return (this.delegate = { iterator: C(n), resultName: e, nextLoc: r }), 'next' === this.method && (this.arg = t), m;
              },
            }),
            n
          );
        })(n.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          'object' == typeof globalThis ? (globalThis.regeneratorRuntime = t) : Function('r', 'regeneratorRuntime = r')(t);
        }
      },
      379: (n) => {
        'use strict';
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              u = i[l] || 0,
              d = ''.concat(l, ' ').concat(u);
            i[l] = u + 1;
            var h = e(d),
              f = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== h) t[h].references++, t[h].updater(f);
            else {
              var p = o(f, r);
              (r.byIndex = c), t.splice(c, 0, { identifier: d, updater: p, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap && t.supports === n.supports && t.layer === n.layer) return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = e(i[a]);
              t[c].references--;
            }
            for (var s = r(n, o), l = 0; l < i.length; l++) {
              var u = e(i[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        'use strict';
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(e);
        };
      },
      216: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        'use strict';
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      795: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = '';
                e.supports && (r += '@supports ('.concat(e.supports, ') {')), e.media && (r += '@media '.concat(e.media, ' {'));
                var o = void 0 !== e.layer;
                o && (r += '@layer'.concat(e.layer.length > 0 ? ' '.concat(e.layer) : '', ' {')), (r += e.css), o && (r += '}'), e.media && (r += '}'), e.supports && (r += '}');
                var i = e.sourceMap;
                i && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')), t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        'use strict';
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      'use strict';
      e(666);
      var n = e(379),
        t = e.n(n),
        r = e(795),
        o = e.n(r),
        i = e(569),
        a = e.n(i),
        c = e(565),
        s = e.n(c),
        l = e(216),
        u = e.n(l),
        d = e(589),
        h = e.n(d),
        f = e(982),
        p = {};
      function m(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
        }
      }
      (p.styleTagTransform = h()), (p.setAttributes = s()), (p.insert = a().bind(null, 'head')), (p.domAPI = o()), (p.insertStyleElement = u()), t()(f.Z, p), f.Z && f.Z.locals && f.Z.locals;
      var g = 'https://api.themoviedb.org/3/',
        w = '739949faaf1aeda8232538dbe179ea8d',
        v = (function () {
          function n() {
            !(function (n, t) {
              if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, n);
          }
          var t, e;
          return (
            (t = n),
            (e = [
              {
                key: 'getPlayingMovies',
                value: function () {
                  return fetch(''.concat(g, 'movie/now_playing?api_key=').concat(w, '&language=en-EN&page=1&region=ID'))
                    .then(function (n) {
                      return n.json();
                    })
                    .then(function (n) {
                      return n.results;
                    });
                },
              },
              {
                key: 'getUpcomingMovies',
                value: function () {
                  return fetch(''.concat(g, 'movie/upcoming?api_key=').concat(w, '&language=en-EN&page=1&region=ID'))
                    .then(function (n) {
                      return n.json();
                    })
                    .then(function (n) {
                      return n.results;
                    });
                },
              },
              {
                key: 'getMovieDetail',
                value: function (n) {
                  return fetch(''.concat(g, 'movie/').concat(n, '?api_key=').concat(w, '&language=en-EN'))
                    .then(function (n) {
                      return n.json();
                    })
                    .then(function (n) {
                      return n;
                    });
                },
              },
              {
                key: 'getMovieCredits',
                value: function (n) {
                  return fetch(''.concat(g, 'movie/').concat(n, '/credits?api_key=').concat(w, '&language=id-ID'))
                    .then(function (n) {
                      return n.json();
                    })
                    .then(function (n) {
                      return n;
                    });
                },
              },
            ]),
            null && m(t.prototype, null),
            e && m(t, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            n
          );
        })();
      function y(n) {
        return (
          (y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
                }),
          y(n)
        );
      }
      function b() {
        b = function () {
          return n;
        };
        var n = {},
          t = Object.prototype,
          e = t.hasOwnProperty,
          r = 'function' == typeof Symbol ? Symbol : {},
          o = r.iterator || '@@iterator',
          i = r.asyncIterator || '@@asyncIterator',
          a = r.toStringTag || '@@toStringTag';
        function c(n, t, e) {
          return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
        }
        try {
          c({}, '');
        } catch (n) {
          c = function (n, t, e) {
            return (n[t] = e);
          };
        }
        function s(n, t, e, r) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            a = new S(r || []);
          return (
            (i._invoke = (function (n, t, e) {
              var r = 'suspendedStart';
              return function (o, i) {
                if ('executing' === r) throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === o) throw i;
                  return { value: void 0, done: !0 };
                }
                for (e.method = o, e.arg = i; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var c = k(a, e);
                    if (c) {
                      if (c === u) continue;
                      return c;
                    }
                  }
                  if ('next' === e.method) e.sent = e._sent = e.arg;
                  else if ('throw' === e.method) {
                    if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
                    e.dispatchException(e.arg);
                  } else 'return' === e.method && e.abrupt('return', e.arg);
                  r = 'executing';
                  var s = l(n, t, e);
                  if ('normal' === s.type) {
                    if (((r = e.done ? 'completed' : 'suspendedYield'), s.arg === u)) continue;
                    return { value: s.arg, done: e.done };
                  }
                  'throw' === s.type && ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
                }
              };
            })(n, e, a)),
            i
          );
        }
        function l(n, t, e) {
          try {
            return { type: 'normal', arg: n.call(t, e) };
          } catch (n) {
            return { type: 'throw', arg: n };
          }
        }
        n.wrap = s;
        var u = {};
        function d() {}
        function h() {}
        function f() {}
        var p = {};
        c(p, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(j([])));
        g && g !== t && e.call(g, o) && (p = g);
        var w = (f.prototype = d.prototype = Object.create(p));
        function v(n) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(n, t, function (n) {
              return this._invoke(t, n);
            });
          });
        }
        function x(n, t) {
          function r(o, i, a, c) {
            var s = l(n[o], n, i);
            if ('throw' !== s.type) {
              var u = s.arg,
                d = u.value;
              return d && 'object' == y(d) && e.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (n) {
                      r('next', n, a, c);
                    },
                    function (n) {
                      r('throw', n, a, c);
                    }
                  )
                : t.resolve(d).then(
                    function (n) {
                      (u.value = n), a(u);
                    },
                    function (n) {
                      return r('throw', n, a, c);
                    }
                  );
            }
            c(s.arg);
          }
          var o;
          this._invoke = function (n, e) {
            function i() {
              return new t(function (t, o) {
                r(n, e, t, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function k(n, t) {
          var e = n.iterator[t.method];
          if (void 0 === e) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (n.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(n, t), 'throw' === t.method)) return u;
              (t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return u;
          }
          var r = l(e, n.iterator, t.arg);
          if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), u;
          var o = r.arg;
          return o
            ? o.done
              ? ((t[n.resultName] = o.value), (t.next = n.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), u)
              : o
            : ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), u);
        }
        function L(n) {
          var t = { tryLoc: n[0] };
          1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
        }
        function E(n) {
          var t = n.completion || {};
          (t.type = 'normal'), delete t.arg, (n.completion = t);
        }
        function S(n) {
          (this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(L, this), this.reset(!0);
        }
        function j(n) {
          if (n) {
            var t = n[o];
            if (t) return t.call(n);
            if ('function' == typeof n.next) return n;
            if (!isNaN(n.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < n.length; ) if (e.call(n, r)) return (t.value = n[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = f),
          c(w, 'constructor', f),
          c(f, 'constructor', h),
          (h.displayName = c(f, a, 'GeneratorFunction')),
          (n.isGeneratorFunction = function (n) {
            var t = 'function' == typeof n && n.constructor;
            return !!t && (t === h || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (n.mark = function (n) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(n, f) : ((n.__proto__ = f), c(n, a, 'GeneratorFunction')), (n.prototype = Object.create(w)), n;
          }),
          (n.awrap = function (n) {
            return { __await: n };
          }),
          v(x.prototype),
          c(x.prototype, i, function () {
            return this;
          }),
          (n.AsyncIterator = x),
          (n.async = function (t, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(s(t, e, r, o), i);
            return n.isGeneratorFunction(e)
              ? a
              : a.next().then(function (n) {
                  return n.done ? n.value : a.next();
                });
          }),
          v(w),
          c(w, a, 'Generator'),
          c(w, o, function () {
            return this;
          }),
          c(w, 'toString', function () {
            return '[object Generator]';
          }),
          (n.keys = function (n) {
            var t = [];
            for (var e in n) t.push(e);
            return (
              t.reverse(),
              function e() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in n) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (n.values = j),
          (S.prototype = {
            constructor: S,
            reset: function (n) {
              if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = void 0), this.tryEntries.forEach(E), !n))
                for (var t in this) 't' === t.charAt(0) && e.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var n = this.tryEntries[0].completion;
              if ('throw' === n.type) throw n.arg;
              return this.rval;
            },
            dispatchException: function (n) {
              if (this.done) throw n;
              var t = this;
              function r(e, r) {
                return (a.type = 'throw'), (a.arg = n), (t.next = e), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, 'catchLoc'),
                    s = e.call(i, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (n, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && e.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ('break' === n || 'continue' === n) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = n), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), u) : this.complete(a);
            },
            complete: function (n, t) {
              if ('throw' === n.type) throw n.arg;
              return 'break' === n.type || 'continue' === n.type ? (this.next = n.arg) : 'return' === n.type ? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === n.type && t && (this.next = t), u;
            },
            finish: function (n) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), E(e), u;
              }
            },
            catch: function (n) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.tryLoc === n) {
                  var r = e.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    E(e);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (n, t, e) {
              return (this.delegate = { iterator: j(n), resultName: t, nextLoc: e }), 'next' === this.method && (this.arg = void 0), u;
            },
          }),
          n
        );
      }
      function x(n, t, e, r, o, i, a) {
        try {
          var c = n[i](a),
            s = c.value;
        } catch (n) {
          return void e(n);
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function k(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(t, e);
            function a(n) {
              x(i, r, o, a, c, 'next', n);
            }
            function c(n) {
              x(i, r, o, a, c, 'throw', n);
            }
            a(void 0);
          });
        };
      }
      document.addEventListener('DOMContentLoaded', function () {
        document.addEventListener(
          'click',
          (function () {
            var t = k(
              b().mark(function t(e) {
                var r, o, i;
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.target.classList.contains('movie-title')) {
                          t.next = 9;
                          break;
                        }
                        return (r = e.target.id), (t.next = 4), v.getMovieDetail(r);
                      case 4:
                        return (o = t.sent), (t.next = 7), v.getMovieCredits(r);
                      case 7:
                        (i = t.sent), n(o, i);
                      case 9:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })()
        );
        var n = function (n, t) {
            var e = (function (n, t) {
              var e = n.genres,
                r = 60 * n.runtime,
                o = Math.floor(r / 3600);
              r -= 3600 * o;
              var i = Math.floor(r / 60),
                a = t.cast,
                c = t.crew,
                s = c
                  .filter(function (n) {
                    return 'Director' === n.job;
                  })
                  .map(function (n) {
                    return n.name;
                  }),
                l = c
                  .filter(function (n) {
                    return 'Writer' === n.job;
                  })
                  .map(function (n) {
                    return n.name.trim();
                  })
                  .join(' • ');
              return '\n    <div class="container">\n      <h1 class="text-white text-2xl font-semibold mb-2">'
                .concat(n.original_title, '</h1>\n    \n      <p class="rating-text">⭐ <strong>')
                .concat(n.vote_average, '</strong>/10  •  <span>')
                .concat(o, ' Jam ')
                .concat(i, ' Menit</span></p>\n      <div class="flex flex-col lg:flex-row">\n        <div class="">\n          <img src="https://image.tmdb.org/t/p/w500')
                .concat(n.poster_path, '" alt="')
                .concat(n.original_title, '" class="rounded-md my-3 mx-auto" />\n        </div>\n        <div class="lg:ml-6">\n        <div class="my-2">\n        ')
                .concat(
                  e
                    .map(function (n) {
                      return '<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">'.concat(n.name, '</span>').trim();
                    })
                    .join(' '),
                  '\n          <p class="text-white text-lg leading-relaxed mt-3">'
                )
                .concat(n.overview, '</p>       \n        </div>\n        <ul class="text-white">\n          <li class="font-bold">Director</li>\n          <li>')
                .concat(s, '</li>\n          <li class="font-bold">Writer</li>\n          <li>')
                .concat(l, '</li>\n        </ul>\n        <div class="mt-3">\n          <h1 class="text-white text-2xl mb-2">Top Cast</h1>\n            <div class="flex min-w-[200px] gap-3 overflow-x-scroll">\n              ')
                .concat(
                  a
                    .slice(0, 9)
                    .map(function (n) {
                      return '\n              <div class="max-w-[120px]">          \n              <img src="https://image.tmdb.org/t/p/w500'
                        .concat(n.profile_path, '" width="100px" class="min-w-[120px] rounded-md">\n                <figcation class="text-center">\n                <h5 class="text-white font-bold">')
                        .concat(n.name, '</h5>\n                <h6 class="text-gray-400 text-xs">')
                        .concat(n.character, '</h6>\n                </figcation>\n             </div>\n               ')
                        .trim();
                    })
                    .join(''),
                  '\n            </div>\n        </div>\n      </div>\n    </div>\n    </div>\n        \n    '
                );
            })(n, t);
            document.querySelector('main').innerHTML = e;
          },
          t = (function () {
            var n = k(
              b().mark(function n() {
                var t, e;
                return b().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), v.getPlayingMovies();
                      case 2:
                        (t = n.sent),
                          (e = ''),
                          t.forEach(function (n) {
                            return (e += r(n));
                          }),
                          (document.querySelector('#nowPlayingMovies').innerHTML = e);
                      case 7:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          e = (function () {
            var n = k(
              b().mark(function n() {
                var t, e;
                return b().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), v.getUpcomingMovies();
                      case 2:
                        (t = n.sent),
                          (e = ''),
                          t.forEach(function (n) {
                            return (e += r(n));
                          }),
                          (document.querySelector('#upcomingMovies').innerHTML = e);
                      case 7:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        function r(n) {
          return '\n    <div class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500'
            .concat(n.poster_path, '" alt="')
            .concat(n.title, '" class="rounded-md bg-cover" />\n      <span class="rating-text">⭐ ')
            .concat(n.vote_average, '</span>\n      <h5 class="movie-title" id="')
            .concat(n.id, '">')
            .concat(n.original_title, '</h5>\n    </div>\n    ');
        }
        t(), e();
      });
    })();
})();
