import React from 'react';
import './App.css';
import CategoryContainer from './Containers/CategoryContainer';

class App extends React.Component {

  state = {
		tasks: [],
		category: ""
	}
	
	componentDidMount() {
		fetch('http://localhost:4000/tasks')
			.then(response => response.json())
			.then(data => this.setState({tasks: data}))
	}

	categoryClick = (categoryName) => {
		this.setState({category: categoryName})
	}

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
				<CategoryContainer tasks={this.state.tasks} categoryClick={this.categoryClick} category={this.state.category} />
      </div>
    )
  }
}

export default App;