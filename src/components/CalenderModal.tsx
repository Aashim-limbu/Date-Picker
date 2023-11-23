import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	startOfMonth,
	startOfWeek,
} from "date-fns";
type CalendarState = {
	selectedDate: Date;
	showModal: boolean;
};

type CalendarModalProps = {
	date: Date;
	setState: React.Dispatch<React.SetStateAction<CalendarState>>;
	State: CalendarState;
};
function CalenderModal({ date, setState}: CalendarModalProps) {
    const currentDate = new Date()
	const intervalDates = eachDayOfInterval({
		start: startOfWeek(startOfMonth(date)),
		end: endOfWeek(endOfMonth(date)),
	});
	return (
		<>
			{intervalDates.map((d, index) => (
				<div
					key={index}
					className={`flex items-center justify-center p-2
                    ${
											isSameDay(d, date)
												? "bg-indigo-600 text-white rounded-lg"
												: ""
										}
                    ${ isSameDay(currentDate, d) ? "border-2 rounded-lg border-indigo-900" : "" }
					 ${isSameMonth(d, date) ? "text-black" : "text-gray-400"}`}
				>
					<button
						onClick={() => setState((state) => ({ ...state, selectedDate: d }))}
					>
						{format(d, "dd")}
					</button>
				</div>
			))}
		</>
	);
}

export default CalenderModal;
