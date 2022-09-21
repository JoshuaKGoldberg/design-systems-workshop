import cx from "classnames";

import styles from "./index.module.css";

const sizes = {
	tiny: styles.sizeTiny,
	small: styles.sizeSmall,
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
};

export type IconSize = keyof typeof sizes;

export interface IconProps
	extends Omit<React.SVGAttributes<SVGElement>, "size"> {
	size: IconSize;
}

export function Icon({ className, size, ...props }: IconProps) {
	return (
		<svg
			className={cx(styles.icon, sizes[size], className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...props}
		/>
	);
}
