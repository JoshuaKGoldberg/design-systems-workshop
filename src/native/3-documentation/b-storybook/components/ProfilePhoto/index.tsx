import cx from "classnames";

import styles from "./index.module.css";

const sizes = {
	tiny: styles.sizeTiny,
	small: styles.sizeSmall,
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
};

export type ProfilePhotoSize = keyof typeof sizes;

export interface ProfilePhotoProps
	extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "size"> {
	bordered?: boolean;
	size: ProfilePhotoSize;
}

export function ProfilePhoto({
	bordered,
	className,
	size,
	...props
}: ProfilePhotoProps) {
	return (
		<img
			className={cx(
				styles.profilePhoto,
				bordered && styles.bordered,
				sizes[size],
				className
			)}
			{...props}
		/>
	);
}
