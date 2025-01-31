// src/routes/p/[id]/+page.server.ts
import {db} from "$lib/database";
import type { PageServerLoad } from './$types';

// 1.
export const load = (async ({ params: { id } }) => {
    // 2.
    const post = await db.post.findUnique({
        where: { id: Number(id) },
        // include: { author: true },
        include: {
                author: {
                  select: {
                    username: true,
                  }
                }
            }
    });

    // 3.
    console.log(post)
    return { post };
}) satisfies PageServerLoad;
