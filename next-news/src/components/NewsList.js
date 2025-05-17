import Link from 'next/link';

export default function NewsList({ news }) {
    if (!Array.isArray(news)) {
        return <p>ไม่พบรายการข่าว หรือข้อมูลไม่ถูกต้อง</p>;
    }

    return (
        <ul className="news-list">
            {news.map(item => (
                <li key={item.id}>
                    <Link href={`/news/${item.slug}`}>
                        <img src={`/images/news/${item.image}`} alt={item.title} />
                        <span>{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}