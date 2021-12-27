import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <div>
            <footer className="mainFooter">
                <div className="footerBar">
                    <h3>Source Code</h3>
                    <p>IF you want to see source code, clink on github</p>
                    
                        <a href="https://github.com/InkSmile/Junior-FullStack-project.git" target="_blank"><i className="git">Github</i></a>
                </div>
                <div className="footerBottom">
                    <p>Copyright &copy;2021 InkSmile. designed by <span>Yasinskyi Oleh</span></p>
                </div>
            </footer>
        </div>
    )
}
