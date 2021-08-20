import React from "react";

const Jumbotron = () => {

    return (<div className="jumbotron bg-light" style={{padding:"20px"}}>
        <h1 className="display-2">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-dark" href="#" role="button">Learn more</a>
    </div>
    )
};

export default Jumbotron
