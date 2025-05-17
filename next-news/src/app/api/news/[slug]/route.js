import { getNewsItem } from '@/lib/news';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
    const { slug } = params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }

    return NextResponse.json(newsItem);
}