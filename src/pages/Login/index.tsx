/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, FormEvent } from 'react';
import { InputWithLabel } from '../../components/shared/InputWithLabel';
import { LuUser } from 'react-icons/lu';
import { RiKeyLine } from 'react-icons/ri';
import { Button } from '../../components/ui/button';
import { FormErrorMessage } from '../../components/shared/FormErrorMessage';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/shared/Loading';

import logo from '../../assets/logo.png';
import { Card, CardContent } from '../../components/ui/card';

const Login = () => {
    const { login, isAuth } = useAuth();

    const [errorsForm, setErrorsForm] = useState<{ usuario?: string, senha?: string }>({}); //estado para armazenar erros de validação
    const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false); // indica se está carregando
    const [errorMessage, setErrorMessage] = useState<string>(''); // possível mensagem de erro após a requisição de login

    const [usuario, setUsuario] = useState<string>(''); // valor do input de usuário
    const [senha, setSenha] = useState<string>(''); // valor do input de senha

    const navigate = useNavigate();

    useEffect(() => {

        if (isAuth) {
            // se o usuário estiver autenticado
            navigate('/dashboard'); //navega para a dashboard
        }

    }, [navigate, isAuth]);

    const validarForm = () => {
        const errors: { usuario?: string, senha?: string } = {}; //inicializa  uma variável para guardar possíveis erros
        if (!usuario) errors.usuario = 'Campo obrigatório'; // se não houver valor no campo usuário
        if (!senha) errors.senha = 'Campo obrigatório'; // se não houver valor no campo de senha

        setErrorsForm(errors); // atualiza o obj com os erros

        return Object.keys(errors).length === 0; // se houver algum erro, retorna false, se não, retorna true
    }

    const clearErrors = (error: 'usuario' | 'senha') => {
        // limpa os erros do obj de erro
        if (error === 'usuario') {
            setErrorsForm((prevErrors) => ({ ...prevErrors, usuario: '' }));
        }

        if (error === 'senha') {
            setErrorsForm((prevErrors) => ({ ...prevErrors, senha: '' }));
        }
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // previne o comportamento padrão

        if (validarForm()) { // verifica se o form é válido
            setButtonIsLoading(true);

            try {
                await login(usuario, senha); // função para fazer login
            } catch (err: any) {
                console.error(err);
                setErrorMessage(err.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde!'); // se der erro, exibe a mensagem
            } finally {
                setButtonIsLoading(false);
            }
        }
    }

    return (
        <div className='h-[98vh] flex items-center justify-center'>
            <Card className='min-w-[80%] md:min-w-[450px]'>
                <CardContent className='p-5'>
                    <form onSubmit={onSubmit} className='w-[100%]'>

                        <div className='flex justify-center'>
                            {/* imagem */}
                            <a href="https://www.feagri.unicamp.br/portal/" target='_blank'>
                                <img src={logo} alt="Logo Feagri Unicamp" />
                            </a>
                        </div>

                        <div>
                            {/* input de usuário */}
                            <InputWithLabel
                                className='w-[100%]'
                                label="Usuário"
                                icon={<LuUser size={20} color="#004882" />}
                                onChange={(e) => {
                                    clearErrors('usuario');
                                    setUsuario(e.target.value);
                                }}
                                value={usuario}
                            />

                            {/* mensagem de erro do campo usuário */}
                            {errorsForm.usuario && <FormErrorMessage message={errorsForm.usuario} />}
                        </div>

                        <div>
                            {/* input de senha */}
                            <InputWithLabel
                                label="Senha"
                                icon={<RiKeyLine size={20} color="#004882" />}
                                type="password"
                                onChange={(e) => {
                                    clearErrors('senha');
                                    setSenha(e.target.value);
                                }}
                                value={senha}
                            />

                            {/* mensagem de erro do campo de senha */}
                            {errorsForm.senha && <FormErrorMessage message={errorsForm.senha} />}
                        </div>

                        {errorMessage && (
                            // se houver uma mensagem de erro
                            <div className='my-4'>
                                <FormErrorMessage message={errorMessage} />
                            </div>
                        )}

                        <Button type="submit" disabled={buttonIsLoading} className='w-[100%] mt-3'>
                            {buttonIsLoading ? <Loading color='white' /> : <p>Entrar</p>}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export { Login };
