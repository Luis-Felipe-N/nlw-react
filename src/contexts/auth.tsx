import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";

export const AuthContext = createContext({ } as IAuthContextData)

interface IUser {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

interface IAuthContextData {
    user: IUser | null;
    signInUrl: string;
    signOut: ( ) => void;
}

interface IAuthProviderProps {
    children: ReactNode
}

interface IAuthResponse {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export function AuthProvider( props: IAuthProviderProps ) { 
    const [ user, setUser ] = useState<IUser | null>(null)
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=a5261de6e78a846fe58c`;

    const signIn = async ( code: string ) => {
        const response = await api.post<IAuthResponse>('/authenticate', {
            code
        })

        const { token, user } = response.data
        
        localStorage.setItem('token', token)
        setUser( user )
    }
    
    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=')

        if ( hasGithubCode ) {
            const [ urlWithoutCode, githubCode ] = url.split('/signin/callback?code=')


            window.history.pushState({}, '', urlWithoutCode)

            signIn( githubCode )
        }

    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if ( token ) {
            api.defaults.headers.common.authorization = `Bearer ${ token }`

            api.get<IUser>('/profile').then( response => {
                setUser( response.data )
            })
        }
    }, [])

    const signOut = ( ) => {
        setUser( null )
        localStorage.removeItem('token')
    }

    return (

        <AuthContext.Provider value={{ signInUrl, user, signOut }}>
            { props.children }
        </AuthContext.Provider>
    )
}

