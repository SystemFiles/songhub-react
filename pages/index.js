import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Create Next App</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						<a>Welcome to SongHub!</a>
					</h1>

					<p className={styles.description}>
						Get started by logging in or creating a new account!
					</p>

					<div className={styles.vertical}>
                        <h1>Log In</h1>
            
                        <input type="text" id="email" name="email" className={styles.textbox} placeHolder="Email"/>
            
            
                        <input type="text" id="password" name="password" className={styles.textbox} placeHolder="Password"/>
					</div>
            
                    <h2>-- OR --</h2>
            
                    <input type="submit" value="Sign Up!" className={styles.signup}/>
				</main>

				<footer className={styles.footer}>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Powered by Sick Beats
					</a>
				</footer>
			</div>
		)
	}
}
