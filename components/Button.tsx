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
            className={`${type !== 'text' && 'px-6 py-1 bg-black text-white'} ${
                type === 'rounded'
                    ? 'rounded-default'
                    : type === 'text'
                    ? 'bg-none px-0'
                    : 'rounded-0'
            }`}>
            {children}
        </button>
    )
}

export default Button
