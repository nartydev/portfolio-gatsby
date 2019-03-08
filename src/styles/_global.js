import styled, { createGlobalStyle, keyframes } from "styled-components"

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

const contentName = styled.div`
    overflow:hidden;
    position: absolute;
    top: 50px;
    left: 50px;
    width: 60px;
    height: 24px;
`

const contentAbout = styled.div`
    overflow:hidden;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 60px;
    height: 24px;
`

const showName = keyframes`
    0% {
        transform:translateY(-100%);
    }
    100% {
        transform: translateY(0%)
    } 
`

const showBar = keyframes`
    0% {
        transform:scaleX(0);
    }
    100% {
        transform: scaleX(1)
    } 
`

const name = styled.div`
    position: absolute;
    top: 0px;
    left:0px;
    font-family: 'Circular Medium';
    z-index: 1;
    font-size: 18px;
    position:relative;
    transform:translateX(-100%);
    animation: ${showName} .4s .7s ease-in-out forwards;
    &::after {
        content: '';
        width: 56px;
        position: absolute;
        top: 22px;
        left: 1px;
        height: 2px;
        border-radius: 2px;
        background: #000;
        transform-origin: left;
        transform:scaleX(0);
        animation:${showBar} .7s 1.3s ease-in-out forwards;
    }
`

const about = styled.div`
    position: absolute;
    top: 0px;
    left:0px;
    font-family: 'Circular Medium';
    z-index: 1;
    font-size: 18px;
    position:relative;
    transform:translateX(-100%);
    animation: ${showName} .4s .7s ease-in-out forwards;

`

const socialMenu = styled.div`
    position: absolute;
    right: -60px;
    bottom: 173px;
    margin: 0;
    padding: 0;

    transform: rotateZ(-90deg);
`

const socialLink = styled.div`
    display:inline-block;
    padding-right:15px;
    padding-left:15px;
    position:relative;
    :after {
        content:'';
        height:30px;
        width:30px;
        position:absolute;
        left:50%;
        top:50%;
        background:#FFF7C7;
        border-radius:50%;
        transform:translateX(-50%) translateY(-50%) scale(0);
        z-index:-1;
        transition:.4s ease-in-out;
    }
    &:hover:after {
        transform:translateX(-50%) translateY(-50%) scale(1);
    }
    a {
        text-decoration:none;
        color:#000;
    }
`


export { GlobalStyle, name, contentName, socialMenu, socialLink, about, contentAbout }
