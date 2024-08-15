import { createContext, useCallback, useEffect, useState } from 'react';

import { DEFAULT_BREAKPOINT } from './constant.ts';
import { BreakPoint, SynergyContextValue, SynergyProviderProps } from './type.ts';

export const SynergyContext = createContext<SynergyContextValue>({ currentBreakPoint: 'lg' });

export const SynergyProvider = (props: SynergyProviderProps) => {
	const { breakPoint = {} } = props;

	const breakPoints = {
		...DEFAULT_BREAKPOINT,
		...breakPoint,
	};

	const getCurrentBreakPoint = useCallback(
		(width: number) =>
			Object.keys(breakPoints)
				.reverse()
				.find((key) => width >= breakPoints[key as BreakPoint]) as BreakPoint,
		[breakPoints]
	);

	const [currentBreakPoint, setCurrentBreakPoint] = useState<BreakPoint>(getCurrentBreakPoint(window.innerWidth));

	const handleResize = useCallback(() => {
		if (currentBreakPoint !== getCurrentBreakPoint(window.innerWidth))
			setCurrentBreakPoint(getCurrentBreakPoint(window.innerWidth));
	}, [currentBreakPoint]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakPoints]);

	return <SynergyContext.Provider value={{ currentBreakPoint }}>{props.children}</SynergyContext.Provider>;
};
