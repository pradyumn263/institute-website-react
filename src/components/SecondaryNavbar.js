import React from 'react';

function SecondaryNavbar(props) {
    return (
        <section className="section bg-default">
            <div className="container">
                <div className="group group-xl">

                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        Admissions
                    </a>
                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        Student Portal
                    </a>
                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        Faculty Portal
                    </a>
                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        Transcripts
                    </a>
                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        E&ICT Academy
                    </a>
                    <a className="btn button-primary btn-round" href="#">
                        {" "}
                        Virtual Tour
                    </a>


                </div>
            </div>
        </section>);
}

export default SecondaryNavbar;