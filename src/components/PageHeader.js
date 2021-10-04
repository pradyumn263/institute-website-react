import React from 'react'

const PageHeader = () => {

    return (
        <section className="section breadcrumb-classic context-dark">
            <div className="container">
                <h1>Computer Science</h1>
                <div className="offset-top-10 offset-md-top-35">
                    <ul className="list-inline list-inline-lg list-inline-dashed p">
                        <li><a>Home</a></li>
                        <li><a>Departments</a></li>
                        <li>Computer Science
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;