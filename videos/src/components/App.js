import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import moon from "../images/color.png";

class App extends React.Component {
  state = { videos: [], selectecVideo: null };

  componentDidMount() {
      this.onTermSubmit('buildings');
  }

  async onTermSubmit(term) {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectecVideo: response.data.items[0]
    });
  }

  onVideoSelect(video) {
    this.setState({ selectecVideo: video });
  }

  render() {
    return (
      <div style={{backgroundImage: `url(${moon})`, height: "1500px"}}>
      <div className="ui container">
        <br/>
        <SearchBar onFormSubmit={(event) => this.onTermSubmit(event)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectecVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={(event) => this.onVideoSelect(event)}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
