import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image
          className={styles.logo}
          src='/Samsung_Orig_Wordmark_BLUE_RGB.png'
          alt='Samsung Logo'
          width={180}
          height={45}
          priority
        />
      </div>

      <Image
        className={styles.image}
        src='/pt_benefit_01_pc.png'
        alt='Samsung Device'
        width={292}
        height={210}
        priority
      />
      <h1 className={styles.center}>
        <div>나에게 맞는</div>
        <div>삼성 디바이스는?</div>
      </h1>

      <div className={styles.grid}>
        <Link href='/1' className={styles.card} rel='noopener noreferrer'>
          <h2>
            GO <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
