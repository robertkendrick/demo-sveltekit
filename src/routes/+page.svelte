<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  // import data from "../lib/data.json";   // json file database

  export let data

</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      {#each data.feed as post (post.id)}
        {#if post.published}
          <Post {post} />
        {/if}
      {/each}
    </div>
  </main>
</div>
