'use client';
import { useRouter } from 'next/navigation';

export default function ModalBackdrop() {
    const router = useRouter();
    return (
        <div className="backdrop" onClick={() => router.back()} />
    );
}