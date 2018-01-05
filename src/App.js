import React, {Component} from 'react';
import _ from 'lodash';
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
			this.videoSearch('surfboards')
		};

		videoSearch(term){
			YTSearch({key:API_KEY,term},(videos)=>{
				this.setState({
					videos,
					selectedVideo:videos[0]
				});
			})
		}


		render() {
				const videlSearch=_.debounce((term)=>{this.videoSearch(term)},500);

				return (
						<div>
								<VideoDetail video={this.state.selectedVideo}/>
								<SearchBar onSearchTermChange={
									videlSearch
								}/>
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
