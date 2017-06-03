// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.renderYoutubeData = this.renderYoutubeData.bind(this);
  }
  
  // componentDidMount() {
  //   console.log("hello");
  //   ReactDOM.findDOMNode(this.refs.myTextInput).getElementsByClassName('video-list-entry-title').addEventListener('onClick', this.onListItemClick);
  // }
  
  onListItemClick(currentVideo) {
    this.setState({
      video: currentVideo
    });
  }
  
  onSearch(searchVal){
    searchYouTube(searchVal, this.renderYoutubeData);
  }
  

  renderYoutubeData(videos) {
    this.setState({
      videos: videos
    });
  //now, update css
  }
  
  
  
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : ''
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <div>
        <Nav onSearch={this.onSearch}/>
        <div className="col-md-7">
         <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5" ref="myTextInput">
         <VideoList videos={this.state.videos} onListItemClick={this.onListItemClick}/>
        </div>
      </div>
    );

  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
let app = new App();
