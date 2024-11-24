import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Lo Squalo<span> Menu</span>
				</h1>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"/menufood.pdf"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Food Menu</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"/menu_black.pdf"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Drink Menu</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"/menupizze.pdf"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Pizze d'asporto</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
		
				<div className={styles.icons_container}>
					
				</div>
			</div>
		</div>
	);
}
