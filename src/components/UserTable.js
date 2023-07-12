import React from 'react'

const Table = ({data,data2}) => {
  
  return (
   <>
      {
        data.map((element) =>{
          const {id, name, budget, spend, forecast } = element
          return(
            <tr key={id}>
              <td className='text-blue-400'>{name}</td>
              <td>{budget}</td>
              <td>{spend}</td>
              <td>{forecast}</td>
            </tr>
          )
        })
      }
      
      
   </>

  )
}

export default Table
