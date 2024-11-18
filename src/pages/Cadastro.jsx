import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Criar Conta</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            {...register('nome', { required: true })}
            className={classNames('mt-1 block w-full rounded-md', {
              'border-red-500': errors.nome,
              'border-gray-300': !errors.nome,
            })}
          />
          {errors.nome && <p className="text-red-500 text-xs italic">Nome é obrigatório</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            className={classNames('mt-1 block w-full rounded-md', {
              'border-red-500': errors.email,
              'border-gray-300': !errors.email,
            })}
          />
          {errors.email && <p className="text-red-500 text-xs italic">Email é obrigatório</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            {...register('senha', { required: true })}
            className={classNames('mt-1 block w-full rounded-md', {
              'border-red-500': errors.senha,
              'border-gray-300': !errors.senha,
            })}
          />
          {errors.senha && <p className="text-red-500 text-xs italic">Senha é obrigatória</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
