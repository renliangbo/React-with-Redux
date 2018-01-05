import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import './App.css';

const API_KEY = 'AIzaSyAz9ytj8L0G0vQJOC2dms_mPx2HVVdNpDk';
class App extends Component {
		constructor(props){
			super(props);
			this.state={ 
				videos:[],
				selectedVideo:null
			};
			YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
				this.setState({
					videos,
					selectedVideo:videos[0]
				});
			})
			super(props)
		}
		render() {
				return (
						<div>
								<VideoDetail video={this.state.selectedVideo}/>
								<SearchBar/>
								<VideoList 
									videos={this.state.videos}
									onVideoSelect={
										selectedVideo=>this.setState({selectedVideo})
									}
								/>
						</div>
				)
		}
}

export default App;
