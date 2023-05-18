'use client';

import { useSSTIContext } from '@/contexts/SSTIContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

type SSTIType = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P';

const Page = () => {
  const { scores, resetScore } = useSSTIContext();
  const types: SSTIType[] = ['E', 'I', 'N', 'S', 'F', 'T', 'J', 'P'];

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {`${scores.E > scores.I ? 'E' : 'I'}
        ${scores.N > scores.S ? 'N' : 'S'}
        ${scores.F > scores.T ? 'F' : 'T'}
        ${scores.P > scores.J ? 'P' : 'J'}`}
      </h1>
      <div className={styles.types}>
        {scores.E > scores.I ? (
          <div className={styles.content}>
            <Image
              className={styles.e}
              src='/e_airdresser.jpg'
              alt='에어드레서'
              width={150}
              height={150}
            />
            <p>밖에 나갈 일이 많을 땐</p>
            <h2>에어드레서</h2>
          </div>
        ) : (
          <div className={styles.content}>
            <Image
              className={styles.i}
              src='/i_buds.jpg'
              alt='갤럭시 버즈'
              width={150}
              height={150}
            />
            <p>집을 좋아하는 당신</p>
            <h2>갤럭시 버즈</h2>
          </div>
        )}
        {scores.N > scores.S ? (
          <div className={styles.content}>
            <Image
              className={styles.n}
              src='/n_flip.jpg'
              alt='갤럭시 플립'
              width={150}
              height={150}
            />
            <p>감각적인 당신</p>
            <h2>갤럭시 플립</h2>
          </div>
        ) : (
          <div className={styles.content}>
            <Image
              className={styles.s}
              src='/s_air.jpeg'
              alt='무풍에어컨'
              width={150}
              height={150}
            />
            <p>기능을 중요시 하는 당신</p>
            <h2>무풍에어컨</h2>
          </div>
        )}
        {scores.F > scores.T ? (
          <div className={styles.content}>
            <Image
              className={styles.f}
              src='/f_bespoke.jpg'
              alt='비스포크 가전'
              width={150}
              height={150}
            />
            <p>감성적인 당신을 닮은</p>
            <h2>비스포크 가전</h2>
          </div>
        ) : (
          <div className={styles.content}>
            <Image
              className={styles.t}
              src='/t_book.jpg'
              alt='갤럭시 북'
              width={150}
              height={150}
            />
            <p>성능을 중요시 하는 당신</p>
            <h2>갤럭시 북</h2>
          </div>
        )}
        {scores.P > scores.J ? (
          <div className={styles.content}>
            <Image
              className={styles.p}
              src='/p_tab.jpg'
              alt='갤럭시 탭'
              width={150}
              height={150}
            />
            <p>떠오르는 생각을 담아</p>
            <h2>갤럭시 탭</h2>
          </div>
        ) : (
          <div className={styles.content}>
            <Image
              className={styles.j}
              src='/j_watch.jpg'
              alt='갤럭시 워치'
              width={150}
              height={150}
            />
            <p>일정 체크에 필수</p>
            <h2>갤럭시 워치</h2>
          </div>
        )}
      </div>
      <Link href='/'>
        <button className={styles.button} onClick={() => resetScore()}>
          다시하러가기
        </button>
      </Link>
    </div>
  );
};

export default Page;
