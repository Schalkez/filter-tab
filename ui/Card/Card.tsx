import { ProjectType } from '@/models';
import React, { FC, memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = { project: ProjectType };

export const Card: FC<Props> = memo(({ project }) => {
  return (
    <Link href={project.link}>
      <div className={`rounded-md bg-gray-100 p-4 ${styles.card_wrapper}`}>
        <div>
          <Image
            width={410}
            height={410}
            loading='lazy'
            src={project.image}
            alt={project.name}
          />
        </div>
        <div className={styles.title_wrapper}>
          <div
            className={`flex items-center rounded-md ${styles.title_wrapper_title}`}
          >
            <h3 className='text-base'>{project.name}</h3>
            <Image
              src='https://img.icons8.com/ios/50/forward--v1.png'
              alt='arrow-icon'
              width={10}
              height={10}
              className={styles.title_wrapper_arrow}
            />
          </div>
        </div>
      </div>
    </Link>
  );
});

Card.displayName = 'Card';
