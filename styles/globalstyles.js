import { createGlobalStyle } from 'styled-components';

export const device = {
  tablet: `(min-width: 768px) and (max-width: 1199px)`,
  mobile: `(max-width: 767px)`,
};

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Ownglyph_meetme-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin, padding
*/
* {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  font-family: 'Ownglyph_meetme-Rg';
}

html,
body {
  height: 100%;
  -ms-overflow-style: none; /* IE and 엣지 */
  scrollbar-width: none; /* 파이어폭스 */
}

/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  5. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/*
  8. list style remove
*/
ul,
li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

input {
  border: none;
  padding: none;
}

input:focus {
  outline: none;
}

button {
  border: 0;
  background: transparent;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

  
`;
