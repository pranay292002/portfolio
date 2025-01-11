import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from "next/image";

const certificates = [
  { id: 1, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608154/Screenshot_2025-01-11_203732_far5zd.png', alt: 'Certificate 1' },
  { id: 2, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608308/Screenshot_2025-01-11_204121_irfwv4.png', alt: 'Certificate 2' },
  { id: 3, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608427/Screenshot_2025-01-11_204250_qzcwd6.png', alt: 'Certificate 3' },
  { id: 4, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608650/Screenshot_2025-01-11_204644_drkpwl.png', alt: 'Certificate 1' },
  { id: 5, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608982/Screenshot_2025-01-11_205215_qmpyrj.png', alt: 'Certificate 2' },
  { id: 6, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736608828/Screenshot_2025-01-11_204952_ncmwjj.png', alt: 'Certificate 3' },
  { id: 7, src: 'https://res.cloudinary.com/dun3jnqjp/image/upload/v1736609106/Screenshot_2025-01-11_205425_knq3ti.png', alt: 'Certificate 1' },
 
];

const CertificateMarquee = () => (
  <Marquee
    speed={50} 
    pauseOnHover={true} 
    gradient={false}
    className='my-16 rmv-m-sm'
  >
    {certificates.map((certificate) => (
      <div key={certificate.id} style={{ padding: '0 30px' }}>
        <Image
          className='cursor-pointer rounded-lg'
          src={certificate.src}
          alt={certificate.alt}
          width={190} 
          height={170} 
          loading="lazy"
        priority={false} 
          
        />

      </div>
    ))}
  </Marquee>
);

export default CertificateMarquee;
