import styles from './styles.module.css';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: TextFieldProps) => {
	return <input className={styles.input} {...props} />;
};
