import { NextResponse } from "next/server"


export function GET(){
    const userProfile = [{
        id: 1,
        name: "Arya Chauhan",
        email: "arya@example.com"
    }]

    return NextResponse.json(userProfile)
}