import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers:[
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "satyam" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        return {
          username: "satyam",
          id:"1",
          email:"satyam@gmail.com"
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }