import { getAvailableNewsYears, getAvailableNewsMonths, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import NewsList from '@/components/NewsList';
import Link from 'next/link';

export default async function ArchiveFilterPage({ params }) {
    const { filter } = params;
    const newsItem = await getNewsItem(slug);

    let selectedYear;
    let selectedMonth;

    if (filter?.length > 0) {
        selectedYear = filter[0];
    }

    if (filter?.length > 1) {
        selectedMonth = filter[1];
    }

    const availableYears = getAvailableNewsYears();
    if (selectedYear && !availableYears.includes(+selectedYear)) {
        throw new Error('Invalid year selected');
    }

    if (selectedMonth) {
        const availableMonths = getAvailableNewsMonths(selectedYear);
        if (!availableMonths.includes(+selectedMonth)) {
            throw new Error('Invalid month selected');
        }
    }

    let news;

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
    } else if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    let links = [];

    if (!selectedYear) {
        // ยังไม่เลือกปี → แสดงลิงก์รายปีทั้งหมด
        links = getAvailableNewsYears().map(year => ({
            label: year,
            href: `/archive/${year}`,
        }));
    } else if (selectedYear && !selectedMonth) {
        // เลือกปีแล้ว → แสดงลิงก์รายเดือนของปีนั้น
        links = getAvailableNewsMonths(selectedYear).map(month => ({
            label: `เดือน ${month}`,
            href: `/archive/${selectedYear}/${month}`,
        }));
    }
    // ถ้าเลือกทั้งปีและเดือนแล้ว ไม่ต้องแสดงลิงก์

    return (
        <>
            <header id="archive-header">
                {/* ส่วนนี้จะทำเพิ่มเติมใน Lab ถัดไป */}
                <p>Archive Filter Links จะมาอยู่ตรงนี้</p>
                <ul>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </header>
            {newsContent}
        </>
    );
}