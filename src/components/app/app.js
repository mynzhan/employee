import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'Batman', price: 800, increase: false, rise: false, id: 1 },
                { name: 'Superman', price: 1000, increase: false, rise: false, id: 2 },
                { name: 'Spiderman', price: 7000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, price) => {
        const newItem = {
            name,
            price,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchFilm = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (item, filter) => {
        switch (filter) {
            case 'rise':
                return item.filter(item => item.rise)
            case 'moreThan':
                return item.filter(item => item.price >= 1000)

            default:
                return item;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const { data, term, filter } = this.state;
        const films = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchFilm(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    films={films} 
                    increased={increased} 
                    />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} 
                        />
                    <AppFilter 
                        filter={filter} 
                        onFilterSelect={this.onFilterSelect}
                        />
                </div>
                <EmployeeList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem} />

            </div>

        );
    }
}

export default App;