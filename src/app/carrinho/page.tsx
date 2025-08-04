'use client';
import Button from '@/UI/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { IoIosCloseCircle } from 'react-icons/io';
import { cartMock } from '@/mocks/cart';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Carrinho = () => {
  const [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);
  return (
    <section className="relative h-full pb-[182px]">
      <div className="main-content px-6 pt-11 pb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-baseline">
            <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full mr-4 bg-slate-100">
              <MdOutlineArrowBackIosNew className="block h-3 w-6 " />
            </div>
            <p className="">Carrinho</p>
          </div>
          <p
            onClick={() => setIsDeleteModeActive(!isDeleteModeActive)}
            className={`underline font-bold ${!isDeleteModeActive ? 'text-orange-500' : 'text-green-600'} `}
          >
            {!isDeleteModeActive ? 'Editar Itens' : 'Concluido'}
          </p>
        </div>
        <div className="buying-itens-wrapper ">
          {cartMock.map((product) => (
            <div key={product.id} className="relative flex mb-8">
              {isDeleteModeActive && (
                <IoIosCloseCircle className="absolute -top-2 -right-4 w-7 h-7 text-red-600" />
              )}

              <div className="relative w-[136px] h-[117px] mr-5">
                <Image
                  src={`/cake-vector.png`}
                  alt={`foto do negocio`}
                  fill={true}
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between min-h-[117px]">
                <p className="text-lg">{product?.name}</p>
                <p className="price font-bold">R${product?.price}</p>
                <div
                  className={`flex ${product?.extra?.choosenSize ? 'justify-between' : 'justify-end'}`}
                >
                  {product?.extra?.choosenSize && (
                    <p>{`${product?.extra?.choosenSize}cm`}</p>
                  )}
                  <span className="flex items-center">
                    <FaCirclePlus className="mr-5" />
                    2
                    <FaCircleMinus className="ml-5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-content-wrapper fixed bottom-0 bg-slate-100 w-full rounded-t-[32px] px-6 pt-6 pb-8">
        <div className="flex items-baseline justify-between mb-8">
          <div className="flex items-baseline justify-baseline">
            <p className="text-sm mr-3">TOTAL:</p>
            <p className="text-3xl">R$78,00</p>
          </div>
          <p className="text-orange-500 underline">Limpar tudo</p>
        </div>
        <Button
          className="bg-orange-500 text-white py-6 "
          title="ENVIAR PEDIDO"
        />
      </div>
    </section>
  );
};

export default Carrinho;
