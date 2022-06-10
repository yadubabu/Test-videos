import React from 'react';
import  SearchBar  from './SearchBar';
import youtube from '../api/youtube';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state={videos:[],selectedVideo:null};

    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit=async term=>{
       const response=await youtube.get('/search',{
            params:{
                q:term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
        // console.log(response.data.items);
    };

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }

    render(){
        return(
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>

                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>

                            <VideosList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default App;