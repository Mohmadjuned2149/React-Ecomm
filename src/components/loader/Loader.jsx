import React from 'react'
import { TailSpin } from 'react-loader-spinner';
import  ReactDOM  from 'react-dom';
import './Loader.css'
const Loader = () => {
  return ReactDOM.createPortal( <TailSpin
  height="80"
  width="80"
  color="#DB0952"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass="loading"
  visible={true}
/>,document.getElementById('loader'))
}

export default Loader