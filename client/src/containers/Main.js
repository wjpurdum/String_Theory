import React from "react";
import promptValues from "../client-data/prompt-values"
import Header from "../components/header"
import { postPreferences } from "../requests/index";
import { processMap } from "../helpers/helpers"
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      selectedItems: new Map()
    };
    this._renderRadioButtons = this._renderRadioButtons.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._submitPreferences = this._submitPreferences.bind(this);
  }
  _handleSelect(e) {
    const value = e.target.value
    const checked = e.target.checked
    this.setState(prevState => ({
      checkedItems: prevState.selectedItems.set(value, checked)
    }))
  }
  _submitPreferences() {
    const preferencesConverted = processMap(this.state.selectedItems)
    const postBody = {
      preferences: preferencesConverted
    }
    Promise.resolve(postPreferences(postBody)).then(response => {
      this.setState({
        selectedSong: response
      })
    }).catch(error => {
      console.log(error, "The error from submit")
    })
  }
  _renderRadioButtons() {
    const radioButtons = promptValues.map((prompt, index) => {
      return (<div className="prompt" key={index}>
            <h1>{prompt.prompt}</h1>
              <label>
                <input
                type="radio" 
                value={prompt.valueOne.value}
                onChange={this._handleSelect}
                />
                {prompt.valueOne.label}
              </label>
              <label className="value-two-label">
                <input 
                  type="radio" 
                  value={prompt.valueTwo.value}
                  onChange={this._handleSelect}
                />
                {prompt.valueTwo.label}
              </label>
              </div>)
    })
    return radioButtons
  }
  _selectedSong() {
    const selectedSong = this.state.selectedSong;
    return (<div className="selected-song">
            <h2>{selectedSong.band}</h2>
            <span className="song-title">{`${selectedSong.songTitle}`}</span> {`from the album `}<span className="album-title">{`${selectedSong.album}`}</span>
            <p>{`Released in ${selectedSong.releaseYear}`}</p>
            <a href={selectedSong.link}>
                Listen Now
            </a>
          </div>)
  }
  render() {
    const radioButtons = this._renderRadioButtons()
    const selectedSong = this.state.selectedSong ? this._selectedSong() : null;
    return (<div className="main-container">
            <Header/>
              <h1>Answer a few questions to discover new string songs</h1>
                <form>
                    {radioButtons}
                </form>
                <button 
                className="submit-button"
                onClick={this._submitPreferences}
                >Play it!</button>
                {selectedSong}
          </div>)
  }
}
export default Main;
