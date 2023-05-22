'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type SSTIType = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J';
type ScoreValue = number;
type SSTIScores = Record<SSTIType, ScoreValue>; // typescript utility

type SSTIContextType = {
  scores: SSTIScores;
  updateScore: (dimension: SSTIType, score: ScoreValue) => void;
  resetScore: () => void;
};

const initialScores: SSTIScores = {
  E: 50,
  I: 50,
  N: 50,
  S: 50,
  T: 50,
  F: 50,
  P: 50,
  J: 50,
};

type SSTIProviderProps = {
  children: ReactNode;
};

const SSTIContext = createContext<SSTIContextType | null>(null);

export const SSTIProvider: React.FC<SSTIProviderProps> = ({ children }) => {
  const [scores, setScores] = useState<SSTIScores>(initialScores);
  const updateScore = (dimension: SSTIType, score: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [dimension]: prevScores[dimension] + score,
    }));
  };
  const resetScore = () => {
    setScores(initialScores);
  };
  console.log(scores);

  return (
    <SSTIContext.Provider value={{ scores, updateScore, resetScore }}>
      {children}
    </SSTIContext.Provider>
  );
};

export const useSSTIContext = (): SSTIContextType => {
  const context = useContext(SSTIContext);
  if (!context) {
    throw new Error('useSSTIContext must be used within an SSTIProvider');
  }
  return context;
};
