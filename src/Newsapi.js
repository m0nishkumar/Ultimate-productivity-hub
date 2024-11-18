import React from "react";
export class Newsapi extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
        // https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=07489e0f61ee45509f941bd17fd52e6d
		fetch(
"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=07489e0f61ee45509f941bd17fd52e6d")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json.articles,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
            <div className="flex flex-row items-center space-x-1">
            <img src="./newsAPI.png" className="h-10 w-10"/>
            <h1 className="text-2xl font-semibold">Technology NewsFeed:</h1>
            </div>
		 {
				items.map((item) => (
                <div className="newsfeed my-4">
                <img src={item.urlToImage} className="rounded-lg startupImgg" alt="Image not found"style={{width:"100%",height:"200px"}}/>
                    <h3 className="text-lg font-semibold my-2">{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
				))
			}
		</div>
	);
}
}

