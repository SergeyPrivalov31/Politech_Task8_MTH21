import BrainItems from "./BrainItems";
const Brain = (props) => {
	return (<div>
		<BrainItems items={props.items} />
	</div>
	)
};

export default Brain;