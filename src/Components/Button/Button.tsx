import React, {ComponentPropsWithoutRef, FC, ElementType, ReactNode} from "react";
import './Button.css'

type ButtonVariantType = 'light' | 'black'

type ButtonPropsType<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    variant: ButtonVariantType
    label: string
    children?: ReactNode
} & ComponentPropsWithoutRef<T>

const Button: FC<ButtonPropsType> = (props) => {
    const {
        as = 'button',
        fullWidth = false,
        variant,
        children,
        label,
        className,
        ...rest
    } = props

    const classNames =`${variant} button ${className}}`

    return (
        <button className={classNames} {...rest}>
            {children && children}
            {label}
        </button>
    );
};

export default Button;