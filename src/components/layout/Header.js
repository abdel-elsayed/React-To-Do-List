import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}
const headerStyle ={
    
    marginTop: '3%',
    color: 'black',
    textAlign: 'center',
    padding: '20px'
}

export default Header