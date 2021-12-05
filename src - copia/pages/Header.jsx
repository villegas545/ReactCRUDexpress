import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav>
                <ul class="nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/saludo">Saludo</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/conocenos">Conocenos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
