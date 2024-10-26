import React from 'react';

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:boder">
  <figure>
    <img src={item.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-teal-300 hover:text-stone-800 px-2 py-1 duration-200">Mua Ngay</div>
      <div className="">{item.location}</div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Cards;
