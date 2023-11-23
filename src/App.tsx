import { useState } from "react";
import Buttons from "./components/Buttons";
import "./index.css";
import { addMonths, format } from "date-fns";
import CalenderModal from "./components/CalenderModal";
import { FcNext, FcPrevious } from "react-icons/fc";
function App() {
	const days = [
		{ name: "SUN" },
		{ name: "MON" },
		{ name: "TUE" },
		{ name: "WED" },
		{ name: "THU" },
		{ name: "FRI" },
		{ name: "SAT" },
	];
	const state = {
		selectedDate: new Date(),
		showModal: false,
	};
	const [{ selectedDate, showModal }, setState] = useState(state);

	return (
		<div className="min-h-screen bg-gray-300 flex items-center justify-center flex-col">
			<div className="flex gap-x-2 mb-5">
				<button
					className="text-2xl"
					type="button"
					onClick={() =>
						setState((state) => ({
							...state,
							selectedDate: addMonths(selectedDate, -1),
						}))
					}
				>
					<FcPrevious />
				</button>
				<Buttons
					type="button"
					onClick={() =>
						setState((state) => ({ ...state, showModal: !state.showModal }))
					}
					className="font-bold text-xl"
				>
					{format(selectedDate, "dd-Mo, yyyy")}
				</Buttons>
				<button
					className="text-2xl"
					type="button"
					onClick={() =>
						setState((state) => ({
							...state,
							selectedDate: addMonths(selectedDate, 1),
						}))
					}
				>
					<FcNext />
				</button>
			</div>
			{showModal && (
				<div className="bg-white border-2 border-black p-2 grid grid-cols-7 text-xl gap-2">
					{days.map(({ name }, index) => (
						<div
							key={index}
							className="border-black font-bold font-2xl border-b-2"
						>
							{name}
						</div>
					))}
					<CalenderModal date={selectedDate} />
				</div>
			)}
		</div>
	);
}

export default App;
