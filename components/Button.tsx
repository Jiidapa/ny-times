import React, { CSSProperties } from 'react'

export interface Button {
    htmlType?: 'submit' | 'reset' | 'button'
    type?: 'rounded' | 'primary' | 'text' | 'outline'
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: CSSProperties
    className?: string
}

const Button: React.FC<Button> = ({
    htmlType,
    type,
    children,
    onClick,
    style,
    className
}: Button) => {
    return (
        <button
            type={htmlType}
            onClick={onClick}
            style={style}
            className={`${className} xs:text-xxs sm:text-xxs ${type !== 'text' ? 'btn' : ''} ${
                type === 'rounded'
                    ? 'rounded-default bg-black-80 text-white'
                    : type === 'text'
                    ? 'bg-none px-0'
                    : type === 'outline'
                    ? 'bg-white rounded-default border-2 border-black-80 text-black-80'
                    : 'rounded-0 bg-black-80'
            }`}>
            {children}
        </button>
    )
}

export default Button
