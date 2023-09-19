import { json } from '@sveltejs/kit'

export async function POST( event ) {
    const data = await event.request.json()  // get data from request body
    const { username, password} = data
    if (!username || !password ) {
        return json(
            {message: 'Missing username and/or password'},
            { status: 400}
        )
    }
    event.cookies.set('username', username, { path: '/'})
    return json( {message: 'Logged in'} )

}