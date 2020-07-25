  
import React from 'react'
import {Link} from 'react-router-dom'
export default function Modal() {
    return (
        <div style={{
            backgroundColor: '#0E0A14ef',
            width: '100%',
            height: '100%',
            top: '0',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '600ms',
        }}>
            <div style={{
                backgroundColor: 'white', padding: '30px 50px', display: 'flex', flexDirection: 'column'
            }}>
                <h1 style={{ paddingBottom: '20px' }}>PARABÉNS!</h1>
                <p>Item removido com sucesso</p>
                <Link to="/">
                    <button >fechar</button>
                </Link>
            </div>

        </div>
    )
}