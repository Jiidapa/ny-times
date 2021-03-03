import React from 'react'

export interface Button {
    htmlType?: 'submit' | 'reset' | 'button'
    type?: 'rounded' | 'primary' | 'text'
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Button> = ({ htmlType, type, children, onClick }: Button) => {
    return (
        <button
            type={htmlType}
            onClick={onClick}
            className={`px-6 py-1 ${
                type === 'rounded'
                    ? 'rounded-default bg-black text-white'
                    : type === 'text'
                    ? 'bg-none sm:px-0 xs:px-0'
                    : 'rounded-0 bg-black text-white'
            }`}>
            {children}
        </button>
    )
}

export default Button
