import styles from "./index.module.css";
import { LeftNav } from "./LeftNav";
import { MiddleArea } from "./MiddleArea";
import { RightColumn } from "./RightColumn";

export function Native3DocumentationATypeScript() {
	return (
		<div className={styles.nativeApp}>
			<LeftNav />
			<MiddleArea />
			<RightColumn />
		</div>
	);
}
