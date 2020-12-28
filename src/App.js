import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: '',
    };
  }
  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    response = await response.json();
    // console.log(response);
    this.setState({ monsters: response });
  }
  onSearchBoxChange =  (event) => {
    const { value } = event.target;
    // console.log(this.state);
    this.setState({searchFeild: value}); 
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase());
    })
    return (
      <div className="App">
        <SearchBox 
          type='search'
          placeholder='Search monsters'
          handleChange={this.onSearchBoxChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;