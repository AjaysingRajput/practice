import React from 'react'

const dataTable = ({data2}) => {
  return (
    <>
     {
        data2.map((element) =>{
          const {id, name, budget, requestBudget, request } = element
          return(
            <tr key={id}>
              <td className='text-blue-400'>{name}</td>
              <td>{budget}</td>
              <td>{requestBudget}</td>
              <td>{request}</td>
              <button className='px-4 cursor-pointer border border-gray-700 m-2 rounded-lg hover:bg-red-400 hover:text-white'>Approve</button>
              <button className='px-4 cursor-pointer border border-gray-700 m-2 rounded-lg hover:bg-red-400 hover:text-white'>Reject</button>
            </tr>
          )
        })
      }      
    </>
  )
}

export default dataTable
