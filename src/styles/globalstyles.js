import { createGlobalStyle } from 'styled-components';
import MeetmeRegular from 'font/meetme.woff';
export const device = {
  tablet: `(min-width: 768px) and (max-width: 1199px)`,
  mobile: `(max-width: 767px)`,
};

export const GlobalStyle = createGlobalStyle`

body{
  background: #f0f6ff;
}

@font-face {
  font-family: 'meetme';
  src: url(${MeetmeRegular}) format('woff');
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
  font-family: 'meetme';
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



html {
  font-size: 62.5%;
}

html,
body,
button,
input,
h1,
h2 {
  line-height: normal;
  font-style: normal;
  font-weight: 400;
}

a,
button {
  cursor: pointer;
}

#__next {
  height: 100%;
}

.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1;
}

`;
