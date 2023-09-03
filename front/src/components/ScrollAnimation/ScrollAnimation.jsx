import React, { useEffect, useRef, useState } from 'react'
import useElementPosition from '../../hooks/useElementPosition'
import { ImageDiv, Main, TextDiv } from './ScrollAnimation.styled'

const data = [
    {
        headding: ``
    },
    {
        headding: `"kami tidak akan meragukan anda"`
    },
    {
        headding: `"meskipun permintaan anda aneh aneh."`
    },
]

const ScrollAnimation = () => {
    const [textIndex,setTextIndex] = useState(0)
    const elementRef = useRef(null)
    const totalFrames = 37
    const imageFrame = useElementPosition(elementRef,totalFrames,1)
    const getImage = (frame) => (`/frames/${frame.toString()}.jpg`)

   useEffect(()=>{
    let index = getTextIndexPercentage()
    if(index<data.length) setTextIndex(index)
   },[imageFrame]) 


   function getTextIndexPercentage(){
    console.log(data.length);
   return Math.floor(((data.length) * imageFrame) / totalFrames )
   }

  return (
    <Main ref={elementRef} >
        <ImageDiv imageFrame={imageFrame} >

        <div className="background-container" style={{position: "absolute", top: 0, right: 0, maxWidth: "100%", height: "auto"}}>
            <img src='/env2.png' alt="Your Image" style={{maxWidth: "100%", height: "auto", display: "block", }} />
        </div>
        <div className="background-container" style={{position: "absolute", bottom: 0, left: 0, maxWidth: "100%", height: "auto"}}>
            <img src='/env3.png' alt="Your Image" style={{maxWidth: "100%", height: "auto", display: "block", }} />
        </div>

        <img style={{
                width: "50%",
                height: "auto",
                position: "absolute",
                right: "0px",
                zIndex: -1,
            }} src={getImage(imageFrame)} alt=""/>
        <TextDiv index={textIndex} dataLength={data.length}style={{
                right: "160px",
                margin: "auto",
                overflow: "hidden",
            }}>
            <div >
                {data?.map(({headding},i)=>{
                return  <h1 style={{
                    opacity:i===textIndex?1:0
                }} >{headding}</h1>
            })}
            </div>
            
        </TextDiv>
       </ImageDiv>
       
    </Main>
  )
}

export default ScrollAnimation