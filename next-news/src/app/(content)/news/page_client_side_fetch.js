"use client";

import { useEffect, useState } from 'react';
import NewsList from '@/components/NewsList';

export default function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8081/news');
            if (!response.ok) {
                setError('ดึงข้อมูลข่าวไม่สำเร็จ');
                setIsLoading(false);
                return;
            }
            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }
        fetchNews();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>หน้ารายการข่าว</h1>
            {news && <NewsList news={news} />}
        </>
    );
}