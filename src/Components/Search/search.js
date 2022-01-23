import React, { useContext } from 'react';
import { InputContext } from '../../Context';
// import Context  from 'Context';

const Search = () => {

    const { input, setInput } = useContext(InputContext)
    console.log(input)
    return (
        <div>
            <div className='' style={{position:"absolute",left:"20%", right:"20%",padding:"20px 0 0 0"}}>
                <input type="text" onChange={(e)=>{setInput(e.target.value)}} className="form-control" placeholder="Search here..." />
            </div>
        </div>
    );
}

export default Search;
