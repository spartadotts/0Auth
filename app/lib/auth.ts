import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH = {

    providers:[
        CredentialsProvider({
            name: "Email",
            credentials:{
                username: {label: 'Email', type: 'text',placeholder: "youremail@xyz.com"},
                password: {label: 'Password', type: 'password', placeholder: "Password"}
            },
            async authorize( credentials: any){
    
                console.log(credentials)
    
                //db logic for signin
                return {
                    id: "user1",
                    name: "gopal singh",
                    email: "gopal.singh@gmail.com"
                }
    
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    
    secret: process.env.NEXTAUTH_SECRET,
    
    callbacks:{
        session: ({ session, token, user}: any) => {
            session.user.id = token.sub
            return session
        }
    }
    
    
    
    }