import { ReactNode } from 'react';

export interface IAuthData {
    nome: string;
    token: string;
}

export interface IAuthContext {
    // dados passados por contexto de autenticação
    login: (usuario: string, senha: string) => void;
    logout: () => void;
    authData: IAuthData | null;
    isAuth: boolean;
    getAuthData: () => void;
}

export interface IAuthContextProviderProps {
    children: ReactNode;
}