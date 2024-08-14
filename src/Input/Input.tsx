import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: TextFieldProps) => {
	return <input className={cx(styles.input, className)} {...props} />;
};
