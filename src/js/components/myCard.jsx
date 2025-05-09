import React from "react";
import '../../styles/myCard.css'

export const MyCard = () => {

    const styles = {
        width: '18rem'
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card myCard" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}