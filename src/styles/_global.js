import styled, { createGlobalStyle } from "styled-components"

import CircularMedium from '../assets/fonts/CircularStd-Medium.woff'
import CircularBook from '../assets/fonts/CircularStd-Book.woff'
import CircularBlack from '../assets/fonts/CircularStd-Black.woff'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    @font-face {
        font-family: 'Circular Medium';
        src: url(${CircularMedium});
    }

    @font-face {
        font-family: 'Circular Bold';
        src: url(${CircularBook});
    }

    @font-face {
        font-family: 'Circular Black';
        src: url(${CircularBlack});
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Circular Medium';
        overflow:hidden;
    }


`

const name = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    font-family: 'Circular Medium';
    z-index: 1;
    font-size: 18px;
`

export { GlobalStyle, name }
