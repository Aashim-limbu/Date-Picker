import { ComponentProps } from "react";
type ButtonProps = {
	className?: string;
	children?: React.ReactNode;
	type: string;
} & ComponentProps<"button">;
function Buttons({ className, type, children, ...otherProps }: ButtonProps) {
	return (
		<button
			type={type}
			{...otherProps}
			className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
		>
			{children}
		</button>
	);
}

export default Buttons;
