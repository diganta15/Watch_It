import React,{Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        Movieinfo:{
            items:[{

            },]
        },
        Tvinfo:{
            items:[{
                
            }]
        },

    }


    componentDidMount(){
        axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_83ul3o8k")
        .then((res)=> this.setState({Movieinfo:res.data}));
        
         axios
           .get("https://imdb-api.com/en/API/MostPopularTVs/k_83ul3o8k")
           .then((res) => this.setState({ Tvinfo: res.data }));


    }
    render(){
        return <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>;
    }
}

export const Consumer = Context.Consumer;