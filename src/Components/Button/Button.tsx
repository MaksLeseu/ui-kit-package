import React, {ComponentPropsWithoutRef, FC, ElementType, ReactNode} from "react";
import './Button.css'

type ButtonVariantType = 'text' | 'contained' | 'outlined'
type ButtonSizeType = 'small' | 'medium' | 'large'
type ButtonColorType = 'light' | 'dark'

type ButtonPropsType<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    size?: ButtonSizeType
    variant: ButtonVariantType
    color?: ButtonColorType
    label: string
    children?: ReactNode
} & ComponentPropsWithoutRef<T>

const Button: FC<ButtonPropsType> = (props) => {
    const {
        as,
        fullWidth = false,
        size = 'medium',
        variant,
        children,
        label,
        color,
        className,
        ...rest
    } = props

    const classNames =`${variant}Variant button ${size}Size ${fullWidth ? 'fullWidth' : null} ${className}}`

    return (
        <button className={classNames} {...rest}>
            {children && children}
            {label}
        </button>
    );
};

export default Button;