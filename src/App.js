import React from "react";
import Cards from "./components/Cards";
import UserTable from "./components/UserTable";

import { cards,data, data2 } from "./data";
import DataTable from "./components/dataTable";

const App = () => {


  return (
    <>
    
      <div className="mt-[50px] mx-[150px]">
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-[30px] max-w-sm md:max-w-none py-5 mx-auto md:mx-0 ">
          {cards.map((element) => {
            return <Cards key={element.id} element={element} />;
            
          })}
        </div>
      </div>
      <div className=' w-full '>
     <div className=' border border-black h-[200px] mx-12 rounded-lg '>
     <div className='m-4 ml-8'>
      <h2 className='border-b border-black pb-4 text-xl'>Buckets you own</h2>
      <table className="w-full h-full ">
      
        <thead className="w-full h-full border-b border-black">
          <tr className="text-left">
            <th >Name</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Forecast</th>
          </tr>
        </thead>
        
        <tbody>
          <UserTable data={data} />
        </tbody>
      </table>
      </div>
      </div>
      </div>

      <div className=' w-full my-10 '>
     <div className=' border border-black h-[200px] mx-12 rounded-lg '>
     <div className='m-4 ml-8'>
      <h2 className='border-b border-black pb-4 text-xl'>Approvals assigned to you</h2>
      <table className="w-full h-full ">
      
        <thead className="w-full h-full border-b border-black">
          <tr className="text-left">
            <th >Bucket Name</th>
            <th>Current Budget</th>
            <th>Requested Budget</th>
            <th>Requested By</th>
          </tr>
        </thead>
        
        <tbody>
          <DataTable data2={data2}/>
          
        </tbody>
      </table>
      </div>
      </div>
      </div>
     
      <div className=' w-full '>
     <div className=' border border-black h-[200px] mx-12 rounded-lg '>
     <div className='m-4 ml-8'>
      <h2 className='border-b border-black pb-4 text-xl'>Buckets you own</h2>
      <table className="w-full h-full ">
      
        <thead className="w-full h-full border-b border-black">
          <tr className="text-left">
            <th >Name</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Forecast</th>
          </tr>
        </thead>
        
        <tbody>
          <UserTable data={data} />
        </tbody>
      </table>
      </div>
      </div>
      </div>
    </>
  );
};

export default App;
