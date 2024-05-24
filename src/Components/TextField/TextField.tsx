import React, { ComponentPropsWithoutRef, ElementType, FC } from 'react'
import './TextField.css'

type TextFieldVariantType = 'outlined' | 'standard'
type TextFieldAsType = 'input' | 'textarea'

type TextFieldPropsType = {
   as?: TextFieldAsType
   header?: string
   fullWidth?: boolean
   variant: TextFieldVariantType
   placeholder?: string
} & ComponentPropsWithoutRef<'input'>

const TextField: FC<TextFieldPropsType> = props => {
   const { as, fullWidth = false, variant, placeholder, header, className, ...rest } = props

   const classNames = `${variant}Variant textField ${fullWidth ? 'fullWidth' : null} ${className}}`

   return (
      <div className={classNames} {...rest}>
         {header && <p className={'header'}>{header}</p>}
         <input placeholder={placeholder ? placeholder : ''} className={'input'} />
      </div>
   )
}

export default TextField
