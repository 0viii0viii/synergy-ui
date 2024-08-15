import React from 'react';

import { DEFAULT_BREAKPOINT } from './constant.ts';

export type SynergyProviderProps = {
	children: React.ReactNode;
	breakPoint?: {
		base?: number;
		sm?: number;
		md?: number;
		lg?: number;
		xl?: number;
		'2xl'?: number;
	};
};

export type BreakPoint = keyof typeof DEFAULT_BREAKPOINT;

export type SynergyContextValue = {
	currentBreakPoint: BreakPoint;
};
