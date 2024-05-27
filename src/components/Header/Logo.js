import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import profileImg from '@/public/logo_light.png';
import profileImgdark from '@/public/logo.png';

const Logo = ({ mode }) => {
  const [logoSrc, setLogoSrc] = useState(profileImg);
  const [logoAlt, setLogoAlt] = useState(profileImgdark);

  useEffect(() => {
    if (mode === 'dark') {
      setLogoSrc(profileImgdark);
      setLogoAlt('daytech dark mode logo');
    } else {
      setLogoSrc(profileImg);
      setLogoAlt('daytech light mode logo');
    }
  }, [mode]);

  return (
    <Link href="/" className={`flex items-center text-${mode === 'dark' ? 'light' : 'dark'}`}>
      <div className="w-40 md:w-40 rounded-lg overflow-hidden mr-2 md:mr-4">
        <Image src={logoSrc} alt={logoAlt} className="w-full h-auto" sizes="20vw" priority />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl"></span>
    </Link>
  );
};

export default Logo;
