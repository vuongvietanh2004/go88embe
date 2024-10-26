import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"
function House() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>Những ngôi nhà uy tín nhất <span className='text-cyan-700'>VietNam:6886</span></h1>
                <p className='mt-12'>
                Chào mừng bạn đến với ngôi nhà tuyệt vời của chúng tôi! 
                Nằm trong khu vực yên tĩnh, ngôi nhà được thiết kế hiện đại với không gian rộng rãi,
                 ánh sáng tự nhiên chan hòa. Với sân vườn xanh mát,
                 đây là nơi lý tưởng để bạn tận hưởng cuộc sống và thư giãn.
                </p>
                <Link to="/">
                <button
                className='mt-6 bg-red-700 text-slate-300 px-4 py-2 rounded-md hover:bg-stone-500 duration-300'>Quay lại
                </button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default House
