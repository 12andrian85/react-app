import React from 'react'
export default function Button({ onClick, text='Click', bgClsass }) {
    return (
        <button
            className={bgClsass}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
