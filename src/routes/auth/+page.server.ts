import type { Action, Actions, PageServerLoad } from './$types'

// export const load = () => {}

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const username = data.get('username')
        const password = data.get('password')
        console.log('username type = ', typeof username)
        if (!username || !password) {
            return {
                message: 'Missing username and/or password'
            }
        }
        event.cookies.set('username', username, {path: '/'})
        return {message: 'Logged in'}
    }
}
