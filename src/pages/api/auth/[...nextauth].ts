import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PostDataUser, LoginUser } from "@/utils/FetchUsers";
import * as argon2 from "argon2";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { data } = await LoginUser("users", {
          email: credentials.email,
          password: credentials.password,
        });
        const hash = await argon2.verify(
          data[0].password,
          credentials.password
        );
        if (hash) {
          return data[0];
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account && account.provider == "credentials") {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;     
        token.email_verified = user.email_verified;
      } else if (account && account.provider == "google") {
        token.id = user.id;
        token.email_verified = profile.email_verified;
        token.role = "member";
        await PostDataUser("users",{email:user.email,role:"member",email_verified:profile.email_verified}, "google");
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("id" in token) {
        session.user.id = token.id;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      if ("email_verified" in token) {
        session.user.email_verified = token.email_verified;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
