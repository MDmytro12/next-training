import Link from 'next/link';
import classes from '../styles/error.module.scss';

export default function Error() {
	return (
		<>
			<h1 className={classes.error}>Path doesn`t exists!</h1>
			<Link href="/">
				<a>Go back!</a>
			</Link>
		</>
	);
}
