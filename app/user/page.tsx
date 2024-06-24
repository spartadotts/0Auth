import { getServerSession } from "next-auth"
import { Appbar } from "../component/Appbar"
import { NEXT_AUTH } from "../lib/auth"


export default async function user(){
    const session = await getServerSession(NEXT_AUTH)
    return <div>
        <Appbar></Appbar>
        User Component
        {JSON.stringify(session)}
    </div>
}