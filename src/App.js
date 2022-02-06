import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryList from './components/CategoryList/CategoryList';
import Joke from './components/Joke/Joke';
import RandomJokeButton from './components/RandomJokeButton/RandomJokeButton';
import request from './request';
import Search from './components/Search/Search';


  
class App extends React.Component {
    
    state = {
        joke: '',
        categories: [],
        currentCategory: 'explicit',
        isActive: 'active'
    };
    
    componentWillMount() {
        this.getCategories();
     

    }
    
    getCategories = () => {
        const page = '/categories';
        request(page, (json) => {
            this.setState({
                categories: json,
                
            });
        });

    };

 
    getJokeByCategory = (e) => {
        const category = e.target.textContent,
            page = '/random?category=' + category;
        console.dir(category);
        request(page, (json) => {
            this.setState({
                joke: json.value,
                currentCategory: category,
            });
            
        });
    };

    getJokeByState = () => {
        const category = this.state.currentCategory,
            page = '/random?category=' + category;
        request(page, (json) => {
            this.setState({
                joke: json.value,
            });
        });
    };


    

    render() {

        return (
            <div className='container'>
                <div className='row'>
                <h3>MSI 2020</h3>
                <br/> <br/><br/> <br/>

                <h1>Hey!</h1>
                <h2>Let’s try to find a joke for you:</h2>
                
                        
                <br/>
                <p>Choose your category:</p>
         
                    <CategoryList
                        handlerGetJokeByCategory={this.getJokeByCategory}
                        categories={this.state.categories}
                        currentCategory={this.state.currentCategory}
                        isActive={this.state.isActive}
                        cb={(index, array, Category) => {
                            if (index < array.length / 2) {
                                return Category;
                            }
                        }}
                    />

                   
                    

                    <CategoryList
                        handlerGetJokeByCategory={this.getJokeByCategory}
                        categories={this.state.categories}
                        currentCategory={this.state.currentCategory}
                        isActive={this.state.isActive}
                        cb={(index, array, Category) => {
                            if (index >= array.length / 2) {
                                return Category;
                            }
                        }}
                    />
                   
                </div>
                <div className='d-flex justify-content-left'>
                
                <div className='random'>
                    <RandomJokeButton
                        handlerGetJokeByState={this.getJokeByState}
                        value='Random Joke' />
                        
                       </div>  
                                   
                <div className="search" >
                      <Search />
                         </div>
                         <Joke value={this.state.joke} />
        
            </div>
            
            </div>
        );
    }
}


export default App;