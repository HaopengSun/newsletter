import { useEffect, useState } from "react";

const useTimeout = (width) => {
  
  const [style, setStyle] = useState({
    display: 'none'
  })
  
  const isMobile = window.innerWidth <= 768;
  const fixedStyle = {
    width: width,
    display: "flex",
    flexDirection: "column",
    border: "3px solid black",
    borderRadius: "15px",
    position: "fixed",
    top: "40%",
    background: "white",
    animation: "slide-up 1s",
    zIndex: "1",
  }
  
  const handleChat = () => {
    if (style.display === "none") {
      const newStyle = {
        ...fixedStyle,
        height: "90%",
        left: "46%",
        transform: "translate(-50%, -50%)"
      }
      const styleMobile = {
        ...fixedStyle,
        height: "70%",
        left: "10%",
        transform: "translate(-12%, -40%)",
      }
      if (isMobile){
        setStyle(styleMobile)
      } else {
        setStyle(newStyle)
      }
    } else {
      const newStyle = {
        display: "none",
      }
      setStyle(newStyle)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => { handleChat() }, 3000);
    return () => clearTimeout(timer);
  }, [])

  return { style, handleChat }
}

export default useTimeout;