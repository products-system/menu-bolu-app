import Image from 'next/image';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  className,
  ...props
}) => {
  return (
    <button className={`rounded-xl text-sm w-full ${className}`} {...props}>
      {title}
      {icon && <Image height={4} width={4} alt="Icone" src={icon}></Image>}
    </button>
  );
};

export default Button;
