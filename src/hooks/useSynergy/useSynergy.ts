import { useContext } from 'react';

import { SynergyContext } from '@/providers/Synergy/SynergyProvider.tsx';

export const useSynergy = () => useContext(SynergyContext);
