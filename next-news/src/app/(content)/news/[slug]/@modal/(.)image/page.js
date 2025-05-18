'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function InterceptedImageModal({ params }) {
    const { slug } = use(params);
    const router = useRouter();

    const [newsItem, setNewsItem] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch(`/api/news/${slug}`);
                if (!res.ok) throw new Error();
                const data = await res.json();
                setNewsItem(data);
            } catch {
                setError(true);
            }
        }

        fetchNews();
    }, [slug]);

    if (error) return <p>ไม่พบข่าว</p>;
    if (!newsItem) return null;

    return (
        <div className="modal-backdrop" onClick={() => router.back()}>
            <dialog open className="modal" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                    width={800}
                    height={800}
                    className="modal-image"
                />
            </dialog>
        </div>
    );
}