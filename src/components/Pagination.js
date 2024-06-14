import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class extends Component {
    static propTypes = { handlePageChange: PropTypes.func, currentPage: PropTypes.number, lastPage: PropTypes.number }

    componentDidMount(){
        console.log('didmount');
    }

    render() {
        const { handlePageChange, currentPage, lastPage } = this.props

        return (
            <div>
                {console.log('render')}
                <nav aria-label="Page navigation ">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item">
                            <button className={`page-link ${currentPage === 1 && 'disabled'}`} onClick={() => handlePageChange(1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className={`page-link ${currentPage === 1 && 'disabled'}`} onClick={() => handlePageChange(currentPage - 1)} >&lt;</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" >{currentPage}</button></li>

                        <li className="page-item">
                            <button className={`page-link ${currentPage === lastPage && 'disabled'}`} onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
                        </li>
                        <li className="page-item">
                            <button className={`page-link ${currentPage === lastPage && 'disabled'}`} onClick={() => handlePageChange(lastPage)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
