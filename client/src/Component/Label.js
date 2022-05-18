import React from 'react'

const obj=[
    {
        type:"Saving",
        color:'#f9c741',
        percent:45,
    },
    {
        type:"Investment",
        color:'#f9c741',
        percent:20,
    },
    {
        type:"Expense",
        color:'rgb(54, 162, 235)',
        percent:10,
    }
]
export default function Label() {
  return (
    <>
      {obj.map((v,i)=>(
          <LabelComponent key={i} data={v}></LabelComponent>
      ))}
    </>
  )
}
function LabelComponent({data}){
    if(!data) return <></>
    return(
        <div className="label flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background:data.color ??'#f9c741'}}></div>
                <h3 className='text-md'>{data.type ??''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent?? 0}%</h3>
        </div>
    )
}
