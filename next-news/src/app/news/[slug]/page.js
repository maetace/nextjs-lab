import notFound from "@/app/news/[slug]/not-found";
import { DUMMY_NEWS } from "@/data/dummy-news";

export default function NewsContentPage({ params }) {
    const { slug } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

    if (!newsItem) {
        return notFound();
    }

    return (
        <article className="news-article">
            <header>
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}
