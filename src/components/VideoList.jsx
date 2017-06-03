var VideoList = (props) => (
 

//   var mapElem =props.videos.map((videoObj) => {
//     //console.log(item);
//     return (
//       <VideoListEntry listitem={videoObj}/>
//     );
//   });
//   return ( <div className="video-list media">{mapElem}</div> );
// };

<div className="video-list media">
  { props.videos.map((videoObj) =>
    <VideoListEntry listitem={videoObj} onListItemClick={props.onListItemClick}/>
  )}
</div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
