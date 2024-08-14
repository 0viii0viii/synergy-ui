import { useContext } from 'react';

import { SynergyContext } from '../../provider/SynergyProvider.tsx';

export const useSynergy = () => useContext(SynergyContext);
