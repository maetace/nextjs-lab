import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from "@/data/dummy-news";
import Link from 'next/link';

export default function NewsContentPage({ params }) {
    const { slug } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

    if (!newsItem) {
        return notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${slug}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />

                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}
