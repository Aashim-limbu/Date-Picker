import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameMonth,
	startOfMonth,
	startOfWeek,
} from "date-fns";

type CalenderModalProps = {
	date: Date;
};
function CalenderModal({ date }: CalenderModalProps) {
	const intervalDates = eachDayOfInterval({
		start: startOfWeek(startOfMonth(date)),
		end: endOfWeek(endOfMonth(date)),
	});
	return (
		<>
			{intervalDates.map((d, index) => (
				<div
					key={index}
					className={`flex items-center justify-center ${
						isSameMonth(d, date) ? "text-black" : "text-gray-400"
					}`}
				>
					{format(d, "dd")}
				</div>
			))}
		</>
	);
}

export default CalenderModal;
