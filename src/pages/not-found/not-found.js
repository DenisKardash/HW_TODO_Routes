import { Link } from 'react-router-dom';
import styles from '../../app.module.css';

export const NotFound = () => (
	<>
		<div className={styles.app}>
			<div className={styles.error}>
				<b>Такая страница не найдена</b>
			</div>
			<button className={styles.button}>
				<Link to="/" className={styles.button}>
					<b>Back</b>
				</Link>
			</button>
		</div>
	</>
);
