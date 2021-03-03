import React from 'react'

export interface Button {
    htmlType?: 'submit' | 'reset' | 'button'
    type?: 'rounded' | 'primary' | 'text' | 'outline'
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Button> = ({ htmlType, type, children, onClick }: Button) => {
    return (
        <button
            type={htmlType}
            onClick={onClick}
            className={`xs:text-xxs sm:text-xxs ${
                type !== 'text' && type !== 'outline' ? 'bg-black text-white btn' : ''
            } ${
                type === 'rounded'
                    ? 'rounded-default'
                    : type === 'text'
                    ? 'bg-none px-0'
                    : type === 'outline'
                    ? 'bg-white rounded-default border-2 border-black text-black btn'
                    : 'rounded-0'
            }`}>
            {children}
        </button>
    )
}

export default Button
