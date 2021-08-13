import React from 'react';
import ReactHtmlParser from 'react-html-parser'

const TableRenderer = ({data}) => {
        if (!data) return '';

        let content = data.content || [];
        let columnNames = content.shift();
        if (!Array.isArray(content) || content.length < 1) return '';
        return (
            <React.Fragment>

                <section className="section section-lg bg-default">
                    <div className="container">
                        <div className="row justify-content-sm-center">
                            <div className="col-md-10 col-xl-8">
                                <table
                                    className="table table-custom table-dark-blue table-fixed"
                                    data-responsive="true"
                                >
                                    <tbody>
                                    <tr>
                                        {
                                            columnNames.map(data => {
                                                return (
                                                    <th>
                                                        {ReactHtmlParser(data)}
                                                    </th>
                                                )
                                            })
                                        }
                                    </tr>
                                    {
                                        content.map(row => {
                                            return (
                                                <tr>
                                                    {
                                                        row.map(data => {
                                                            return <td>{ReactHtmlParser(data)}</td>
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
;

export default TableRenderer;