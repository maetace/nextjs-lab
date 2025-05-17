import NewsList from '@/components/NewsList';

export default async function NewsPage() {
    const response = await fetch('http://localhost:8081/news');
    if (!response.ok) {
        throw new Error('ดึงข้อมูลข่าวไม่สำเร็จ');
    }
    const news = await response.json();
    return (
        <>
            <h1>หน้ารายการข่าว</h1>
            <NewsList news={news} />
        </>
    );
}