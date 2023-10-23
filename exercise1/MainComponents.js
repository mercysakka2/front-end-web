// create class message
class UserMessage extends React.Component { 
	render() {// render function
		return ( // return JSX
			<div>
				<small>(this.props.user):</small> 
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}

// create component ChatBox
class ChatBox extends React.Component {
	// render function
	render() { // return JSX
		return (
			<div class="main">
				<UserMessage user="Semmy Taju" content="Hi, apa kabar semua?" />
				<UserMessage user="Mercy Sakka" content="Baik, apa kabar juga?" />
				<UserMessage user="Angie Shannon" content="Sehat juga." />
				<UserMessage user="Marion Simon" content="Aku senang dan girang selalu !!!" />
				<UserMessage user="Lovi Djarang" content="Senang bisa juga via message dengan kalian semua." /> 
				<UserMessage user="Inka Sumahap" content="Biasa aja kale." />
			</div>
		);
	}
}

// render elements to DOM
ReactDOM.render(<ChatBox />, document.getElementById("app"));