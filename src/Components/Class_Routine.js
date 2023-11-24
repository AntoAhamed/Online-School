import React from 'react'
import s9 from '../Assets/9s.png'
import c9 from '../Assets/9c.png'
import s10 from '../Assets/10s.png'
import c10 from '../Assets/10c.png'

function Class_Routine(props) {
  const { classs, group } = props;

  return (
    <div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "30px", fontFamily: "Dancing Script" }}><b><i>Class Routine</i></b></p>
      </div>
      <div className='p-2 m-2'>
        <p className='p-1 m-1' style={{ textAlign: "center", fontSize: "20px", fontFamily: "Dancing Script" }}><b><i><pre>Class: {classs}                                        Group: {group}</pre></i></b></p>
      </div>
      <div className='p-2 m-2 d-flex justify-content-center'>
        {classs==9&&group=="science"?
        <img src={s9} alt='' className='mb-4' width={"80%"} />:''}
        {classs==10&&group=="science"?
        <img src={s10} alt='' className='mb-4' width={"80%"} />:''}
        {classs==9&&group=="commerce"?
        <img src={c9} alt='' className='mb-4' width={"80%"} />:''}
        {classs==10&&group=="commerce"?
        <img src={c10} alt='' className='mb-4' width={"80%"} />:''}
      </div>
    </div>
  )
}

export default Class_Routine
