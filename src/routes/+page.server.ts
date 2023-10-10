// src/routes/+page.server.ts

import {db} from '$lib/database'
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const response = await db.post.findMany({
    where: { published: true },
    // include: { author: true },
    include: { 
        author: {
            select: {
                username: true, 
            },
        },
    },
  })

// 2.
console.log(response)
return { feed: response };
}) satisfies PageServerLoad;
