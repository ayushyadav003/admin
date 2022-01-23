    import React from 'react';
    
    const Navbar = () => {
        return (
            <div className="navbar navbar-expand navbar-dark">
                <div className="container">
                    <a className="ba pa1 br3 navbar-brand" href="0">Senpai</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>   
                <div style={{display:"flex",color:"white",marginLeft:"auto"}}>
                    <div>
                        <i className='mr4 pointer ni ni-fat-add'>Add</i>
                    </div>
                    <div>
                        <i className='mr4 pointer ni ni-fat-delete'>Remove</i>
                    </div>
                    <div><i className="mr3 pointer ni ni-settings-gear-65" /></div>
                    <div><i className="mr1 pointer ni ni-bell-55" /></div>
                </div>                     
            </div>
        );
    }
    
    export default Navbar;
    