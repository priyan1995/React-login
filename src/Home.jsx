import React from 'react';

export const Home = ({ handleLogout }) => {

    return (
        <>

            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Welcome</h2>
                            <button onClick={handleLogout} >Logout</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}