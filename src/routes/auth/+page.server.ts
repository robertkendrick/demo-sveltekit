// export const load = () => {}

export const actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const username = data.get('username')
        const password = data.get('password')
        if (!username || !password) {
            return {
                message: 'Missing username and/or password'
            }
        }
        event.cookies.set('username', username, {path: '/'})
        return {message: 'Logged in'}
    }
}
