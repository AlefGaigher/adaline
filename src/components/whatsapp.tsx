import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; 

export function WhatsAppButton() {
    const whatsappNumber = '+552735353968'; 

    return (
        <div className='z-50 bottom-3 right-3 fixed'>
            <Link href={`https://wa.me/${whatsappNumber}`} target='_blank' aria-label="Read more about Seminole tax hike">
                <div rel="noopener noreferrer" className='flex items-center justify-center rounded-full bg-whatsapp text-white text-center text-4xl w-14 h-14 shadow-3xl'>
                    <FaWhatsapp />
                </div>
            </Link>
        </div>
    );
}

