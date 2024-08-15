import classNames from 'classnames/bind';

import styles from './button.module.scss';

type ButtonProps = {
	name: string;
	onClick: any;
	size: 'sm' | 'md' | 'lg';
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

const cx = classNames.bind(styles);

export const Button = (props: ButtonProps): React.ReactElement => {
	const { name, size, leftIcon, rightIcon, ...rest } = props;
	return (
		<button {...rest} type="button" className={cx('button', size)}>
			{leftIcon ? <span className={cx('icon', 'left')}>{leftIcon}</span> : null}
			{name}
			{rightIcon ? <span className={cx('icon', 'right')}>{rightIcon}</span> : null}
		</button>
	);
};
