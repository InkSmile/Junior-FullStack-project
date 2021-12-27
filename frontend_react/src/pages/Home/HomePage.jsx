import React from 'react'
import "./homePage.css"

export default function HomePage() {
    return (
    <div>
        <div className="text-center">
        <hr />
        <h5>
        </h5>
        <h1>App with React + Django</h1>
        </div>
        <div className="text-center">
            <a href="/user" className="buttonUser">User List</a>
            <a href="/group" className="buttonUser">Group List</a>

        </div>
    </div>
    )
}
