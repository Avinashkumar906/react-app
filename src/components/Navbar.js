import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-body-secondary px-2">
            <div className='d-flex justify-content-center align-items-center flex-grow-1'>
                <div className="">
                    <span  className="navbar-brand mb-0 h1">News</span>
                </div>
                <ul className="nav justify-content-end flex-grow-1">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Top News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">Technology</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}
