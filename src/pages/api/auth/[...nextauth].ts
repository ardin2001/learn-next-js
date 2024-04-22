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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: credentials?.username, email: `${credentials?.username}@example.com` }
  
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