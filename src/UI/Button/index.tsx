import Image from 'next/image';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`rounded-xl text-sm w-full ${disabled ? 'bg-slate-400' : ''} ${className} `}
      {...props}
    >
      {title}
      {icon && <Image height={4} width={4} alt="Icone" src={icon}></Image>}
    </button>
  );
};

export default Button;
