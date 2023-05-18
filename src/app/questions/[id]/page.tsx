'use client';

import { useRouter } from 'next/navigation';
import { useSSTIContext } from '@/contexts/SSTIContext';
import { useEffect } from 'react';
import data from '@/app/data/data';
import styles from './page.module.css';

type SSTIType = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P';

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const router = useRouter();
  const { updateScore } = useSSTIContext();

  if (Number(id) > data.length) {
    router.push('/404');
  }
  // useEffect(() => {
  //   if (id === '1') {
  //     const types: SSTIType[] = ['E', 'I', 'N', 'S', 'F', 'T', 'J', 'P'];
  //     types.forEach((type: SSTIType) => updateScore(type, 0));
  //   }
  // }, []);

  const handleAnswer = (dimension: SSTIType, score: number) => {
    updateScore(dimension, score);
    const val = Number(id); // +id;
    if (val === data.length) router.push('/result');
    else router.push(`/questions/${val + 1}`);
  };

  return (
    <div className={styles.container}>
      {data.map((x, idx) => {
        const [firstType, secondType] = x.type.split('') as [
          SSTIType,
          SSTIType
        ];
        if (idx === Number(id) - 1) {
          return (
            <div key={idx}>
              <h1 className={styles.question}>{x.question}</h1>
              <div className={styles.answer}>
                <button
                  onClick={() => {
                    handleAnswer(firstType, 15), handleAnswer(secondType, -10);
                  }}
                >
                  {x.answer1}
                </button>
                <button
                  onClick={() => {
                    handleAnswer(secondType, 15), handleAnswer(firstType, -10);
                  }}
                >
                  {x.answer2}
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Page;
