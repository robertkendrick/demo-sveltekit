// src/routes/p/[id]/+page.server.ts
import {db} from "$lib/database";
import type { PageServerLoad } from './$types';

// 1.
export const load = (async ({ params: { id } }) => {
    // 2.
    const post = await db.post.findUnique({
        where: { id: Number(id) },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // include: { author: true },
        include: { 
            author: {
                select: {
                    username: true, 
                },
            },
        },
    
=======
        include: { author: true },
>>>>>>> f2a6af7e9e9ecc2ced45724a5d8a39c8ecb9b47b
=======
        include: { author: true },
>>>>>>> f2a6af7e9e9ecc2ced45724a5d8a39c8ecb9b47b
=======
        include: { author: true },
>>>>>>> f2a6af7e9e9ecc2ced45724a5d8a39c8ecb9b47b
    });

    // 3.
    return { post };
}) satisfies PageServerLoad;
