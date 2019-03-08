import styled, { keyframes } from "styled-components"
import * as CONSTANT from './_constants'
import { Link } from "gatsby"

const container = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    left:0;right:0;top:0;bottom:0;
    background:#ffffff;
    z-index:0;
`

const containerProject = styled.div`
    width: 1500px;
    height: 60vh;
    display: flex;
    align-items: center;
    position:absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
`

const titleProject = styled.div`
    font-size:4.5em;
    letter-spacing:1px;
    padding:10px 10px 10px 0;
    margin-left: -4px;
    background:#fff;
`

const descProject = styled.div`
    font-size:20px;
    font-family: "Circular Bold";
    color:##5A5A5A;
    opacity:0;
    transform:translateY(250%) rotateZ(10deg);
`

const letterTitle = styled.div`
    opacity:0;
    display:inline-block;
    transform:translateY(-50%) rotateZ(10deg);
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
    transform:translateY(-100%);
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

const link = styled(Link)`
    color:#000;
    text-decoration:none;
    &:hover {
        color:#000;
        text-decoration:none;
    }
`  

export { container, containerProject, titleProject, descProject, letterTitle, name, contentName, socialMenu, socialLink, about, contentAbout, link }