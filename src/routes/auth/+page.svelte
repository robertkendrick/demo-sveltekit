<script lang="ts">
    // when +page.svelte used +server.ts 
    // let username = ""
    // let password = ""
    // let message = ""

    // const handleSubmit = async () => {
    //     message = ''
    //     const response = await fetch('/auth', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username,
    //             password
    //         })
    //     })
    //     const data = await response.json()
    //     message = data.message
    // }

    // now using form actions from +page.server.ts
    export let form
</script>

<!-- <form on:submit|preventDefault={handleSubmit}> --> 
<form method="post">
    <p>{form?.message || ''}</p>
    <!-- <input type="text" name="username" placeholder="Username"bind:value={username} />
    <input type="password" name="password" placeholder="Password"bind:value={password} /> -->
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
</form>