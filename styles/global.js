import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Merriweather', sans-serif;
    font-size: 18px;
    color: hsl(0, 0%, 98%);
    background: hsl(200, 20%, 14%);
  }

  h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 2rem;
    margin: 3rem 0;
  }

  p {
    margin: 2rem 0;
    line-height: 1.6;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
    margin: 2rem 0;
    border-radius: 4px;
  }

  a {
    color: white;
  }

  ul {
    margin: 2rem 0;
  }

  li {
    margin: 0.4rem 0;
    list-style-position: inside;
  }
`
