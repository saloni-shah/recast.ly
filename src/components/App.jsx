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
  }
  
  // componentDidMount() {
  //   console.log("hello");
  //   ReactDOM.findDOMNode(this.refs.myTextInput).getElementsByClassName('video-list-entry-title').addEventListener('onClick', this.onListItemClick);
  // }
  
  onListItemClick(currentVideo) {
    console.log(currentVideo);
    this.setState({
      video: currentVideo
    });
    console.log(this.state.video);
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
        <Nav />
        <div className="col-md-7">
         <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5" ref="myTextInput">
         <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );

  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
let app = new App();
