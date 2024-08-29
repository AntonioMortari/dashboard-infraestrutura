import { createContext, useCallback, useEffect, useState } from 'react';
import { IAuthContext, IAuthContextProviderProps, IAuthData } from '../@types/contexts/auth';
import { api } from '../services/config';
import { LoginResponse } from '../@types/login';

// contexto para autenticação
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [authData, setAuthData] = useState<IAuthData | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    // Função para login
    const login = useCallback(async (usuario: string, senha: string) => {
        const url = '/login';

            const { data } = await api.post<LoginResponse>(url, {
                email: usuario,
                senha
            });

            // atualiza os dados do usuário
            const userData = {
                nome: data.users[0].displayName,
                token: data.token
            };

            setAuthData(userData);
            setIsAuth(true);

            // atualiza o localstorage
            localStorage.setItem('@auth', JSON.stringify(userData));

    
    }, []);

    // Função para logout
    const logout = useCallback(() => {
        // limpa os dados da aplicação e localstorage
        setAuthData(null);
        setIsAuth(false);
        localStorage.removeItem('@auth');
    }, []);

    // Função para obter dados de autenticação
    const getAuthData = useCallback(() => {
        const authDataString = localStorage.getItem('@auth');

        if (authDataString) {
            // se houver dados no localstorage, atualiza os dados da aplicação
            const parsedData = JSON.parse(authDataString);
            console.log(parsedData)
            setAuthData(parsedData);
            setIsAuth(true);
        }

    }, []);

    // Verifica e recupera dados de autenticação na inicialização
    useEffect(() => {
        getAuthData();
    }, [getAuthData]);

    return (
        <AuthContext.Provider value={{
            authData,
            login,
            logout,
            getAuthData,
            isAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };
