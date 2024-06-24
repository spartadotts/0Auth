"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar(){

    const session = useSession();
    return <div className="flex justify-between">
        <div>
           <button onClick={() => {
            signIn();
           }}>Signin</button>
        </div>
        <div>
            <button onClick={() => {
                signOut();
            }}>Logout</button>

        </div>
        {JSON.stringify(session)}

    </div>

}