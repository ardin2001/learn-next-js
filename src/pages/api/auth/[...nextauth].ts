import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { LoginUser } from "@/utils/FetchUsers";
import * as argon2 from "argon2";

const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  session:{
    strategy:'jwt'
  },
  secret : process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials:any) {
        const {data} = await LoginUser("users", {username:credentials.username, password:credentials.password})
        const hash = await argon2.verify(data[0].password, credentials.password);
        if (hash) {
          return data[0]
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
        token.username = user.username
        token.role = user.role
      }
      return token
    },
    async session({ session, token }:any) {
      session.user.id = token.id
      session.user.username = token.username
      session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: "/auth/login"
  }
}

export default NextAuth(authOptions)