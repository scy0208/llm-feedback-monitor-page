import { RequestCookies } from "@edge-runtime/cookies";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

type RequestData = {
    content: string;
    project_id: string;
    group_id?: string;
    created_by?: string;
    id?: string; // Allow ID to be optionally provided
    config_id?: string
}

export const runtime = 'edge';

export function createClient() {
    const cookies = new RequestCookies(new Headers()) as any;
    return createRouteHandlerClient<any>(
        { cookies: () => cookies },
        {
            supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
            supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
        }
    )
}

export async function insertContent(
    { content, project_id, created_by, group_id, id }: RequestData) {
    if (!content) {
        throw new Error("Content is required");
    }
    if (!project_id) {
        throw new Error("project_id is required");
    }

    const dataToInsert = {
        content,
        project_id,
        group_id,
        created_by,
        ...(id ? { id } : {}), // Include the ID if provided, otherwise leave it undefined so that the database auto-generates it
    };

    const { data, error } = await createClient()
        .from('Content')
        .insert([dataToInsert])
        .select();

    if (error || !data || data.length === 0) {
        throw new Error(error?.message || "Data is null or empty");
    }

    return data[0].id;
}

export default async function PUT(req: Request) {
    try {
        const requestData = (await req.json()) as RequestData;
        if (!requestData.content) {
            return new Response(JSON.stringify({ message: 'Content is required' }), { status: 400 });
        }

        if (!requestData.project_id) {
            return new Response(JSON.stringify({ message: 'project_id is required' }), { status: 400 });
        }

        const id = await insertContent(requestData);
        return new Response(JSON.stringify({ id }), { status: 200 });
    } catch (error) {
        console.error("An error occurred:", error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
