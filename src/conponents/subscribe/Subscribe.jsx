import React from "react";
import Button from "../button/Button"

export default function Subscribe() {
  function confirm(){
    console.log('confirm')
  }
  return (
  <>
    <Button confirm onClick={confirm}>Confirm</Button>
  </>
  )
}