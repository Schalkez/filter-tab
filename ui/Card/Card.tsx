import { ProjectType } from '@/models';
import React, { FC, memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = { project: ProjectType };

export const Card: FC<Props> = memo(({ project }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Link href={project.link}>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        className='rounded-md bg-gray-100 p-4'
        style={{
          position: 'relative',
          transition: 'all ease-out 0.2s',
          boxShadow: isHovering
            ? '0px 18px 28px rgba(0, 0, 0, 0.14)'
            : '0px 12px 28px rgba(0, 0, 0, 0.14)',
          top: isHovering ? -3 : 0,
        }}
      >
        <div>
          <Image
            width={410}
            height={410}
            loading='lazy'
            src={project.image}
            alt={project.name}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '3px',
            width: '100%',
            justifyContent: 'space-between',
            padding: '16px',
          }}
        >
          <div
            className='flex items-center rounded-md'
            style={{
              width: '100%',
              justifyContent: 'space-between',
              padding: '16px',
              boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.14)',
              backgroundColor: 'white',
            }}
          >
            <h3 className='text-base'>{project.name}</h3>
            <Image
              src='https://img.icons8.com/ios/50/forward--v1.png'
              alt='arrow-icon'
              width={10}
              height={10}
              style={{ height: 10 }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
});

Card.displayName = 'Card';
