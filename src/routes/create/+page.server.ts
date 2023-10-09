// src/routes/create/+page.server.ts

// import prisma from "$lib/prisma";        // same as below, different name variables
import { db } from '$lib/database'
import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';

const create: Action = async ({ request }) => {
    // 1.
        const data = await request.formData();

        let title = data.get("title")
        let content = data.get("content")
        let username = data.get("username")

        // 2.
        if (!title || !content || !username) {
            return fail(400, { content, username, title, missing: true });
        }

        // 3.
        if (typeof title != "string" || typeof content != "string" || typeof username != "string") {
            return fail(400, { incorrect: true })
        }

        // 4.
        await db.post.create({
            data: {
                title,
                content,
                // author: { connect: { email: username } }
                author: { connect: { username: username } }
            },
        });

        //5.
        throw redirect(303, `/`)
}
 

export const actions: Actions = { create }
