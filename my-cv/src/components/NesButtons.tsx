import "nes.css/css/nes.min.css";

export const NesButtons = () => {
	return (
		<div>
			<button type="button" className="nes-btn is-primary">
				Primary
			</button>
			<button type="button" className="nes-btn is-success">
				Success
			</button>
			<button type="button" className="nes-btn is-warning">
				Warning
			</button>
			<button type="button" className="nes-btn is-error">
				Error
			</button>
			<button type="button" className="nes-btn is-disabled">
				Disabled
			</button>
		</div>
	);
};
