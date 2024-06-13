import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialMediaLinks = {
  linkedin: 'https://br.linkedin.com/company/adaline-computing-inc', 
  instagram: 'https://www.instagram.com/adalinesistemas/', 
  youtube: 'https://www.youtube.com/channel/UCzDXOJueNFkX4kzMC03pZQA/videos', 
  facebook: 'https://www.facebook.com/adalinesistemas/', 
};

const iconClasses = 'mb-1 flex items-center justify-center rounded-full bg-blue-primary text-white text-lg w-9 h-9 hover:bg-blue-sencondary';
const containerClasses = 'z-50 bottom-1/2 left-0 fixed';

export function SocialMediaButtons() {
  return (
    <div className={containerClasses}>
      <div className='bg-white text-blue-primary text-center text-xl w-12 h-50 shadow-3xl p-1 rounded-e-lg '>
        {Object.entries(socialMediaLinks).map(([platform, url], index) => (
          <Link key={index} href={url} target='_blank' rel="noopener noreferrer" aria-label="Read more about Seminole tax hike">
            <div className={iconClasses}>
              {platform === 'linkedin' && <FaLinkedin />}
              {platform === 'instagram' && <FaInstagram />}
              {platform === 'youtube' && <FaYoutube />}
              {platform === 'facebook' && <FaFacebook />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
