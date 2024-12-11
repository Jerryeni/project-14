"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { usePresale as usePresaleHook } from '@/hooks/usePresale';

const PresaleContext = createContext<ReturnType<typeof usePresaleHook> | null>(null);

export const PresaleProvider = ({ children }: { children: ReactNode }) => {
  const {status,
    uccInfo,
    userUCCInfo,
    userAddress,
    totalTokens,
    buyWithUSDT,
    buyWithBNB,
    resetStatus,
    initWallet} = usePresaleHook();
  return (
    <PresaleContext.Provider value={{status,
        uccInfo,
        userUCCInfo,
        userAddress,
        totalTokens,
        buyWithUSDT,
        buyWithBNB,
        resetStatus,
        initWallet}}>
      {children}
    </PresaleContext.Provider>
  );
};

export const usePresale = () => {
  const context = useContext(PresaleContext);
  if (!context) {
    throw new Error('usePresale must be used within a PresaleProvider');
  }
  return context;
};