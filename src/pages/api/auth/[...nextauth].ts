import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  // session:{
  //   strategy:'jwt'
  // },
  secret : process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        async function login(username: any, password: any) {
          const data = await fetch("/api/users/login", {
            body: JSON.stringify({
              username: username,
              password: password
            }),
            method: "POST"
          })
          const json = await data.json()
          return json
        }
        const user = await login(credentials?.username, credentials?.password)
  
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.password = user.password
      }
      return token
    },
    async session({ session, token }:any) {
      session.user.id = token.id
      token.name = token.name
      token.password = token.password
      return session
    }
  }
}

export default NextAuth(authOptions)