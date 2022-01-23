import axios from 'axios';
import React, { useEffect, useState } from 'react';

    const List = () => {

        const[list, setList] = useState(null)


        useEffect(()=>{
            try {
                axios.get("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
                .then((res)=> setList(res.data.clients))
                
            } catch (error) {
                console.log("Somthing is wrong", error)
            }
        },[])


     return (
        <div className='table-responsive' style={{background:"white",position:"absolute",width:"94%",left:"3%", right:"3%", margin:"11em 0 0 0"}}>
            <table className='table'>
                <thead className='thead-light'>
                <tr>
                    <th className='text-lg'>Name</th>
                    <th className="text-lg">Status</th>
                    <th className='text-lg'>Company</th>
                </tr>
                </thead>                
                {
                list? list.map((list)=> 
                    <tbody className='' key={list.id}>
                        <tr>
                                <th>{list.name}</th>
                                {
                                    list.id %2 === 0 ? <th style={{width:"10px",}} className='bg-green br4' >Online</th> 
                                    : <th className='bg-red br4'>Offline</th>
                                }
                                <th>{list.company}</th>    
                        </tr>
                    </tbody>
                ) : null
                }
            </table>
        </div>
     );               

    }

    export default List;
