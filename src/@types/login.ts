
export interface LoginResponse {
    users: User[]
    auth: boolean
    token: string
  }
  
  export interface User {
    dn: string
    userPrincipalName: string
    sAMAccountName: string
    mail: string
    whenCreated: string
    pwdLastSet: string
    userAccountControl: string
    givenName: string
    cn: string
    displayName: string
    description: string
    groups: unknown[]
  }
  