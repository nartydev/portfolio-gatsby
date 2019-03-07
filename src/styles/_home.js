import styled from 'styled-components'
import * as CONSTANT from './_constants'

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

export { container, containerProject, titleProject, descProject, letterTitle }