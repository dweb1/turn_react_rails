import React, { Component } from 'react';

class NewArtist extends Component {
    constructor(){
        super();
        this.state = {
            photo_url: '',
            nationality: '',
            name: ''
        }
      }

      _createNewArtist = () => {

      }

      _handleChange = (e) => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
      }

    render() {
        return (
            <div>
                <form onSubmit={this._createNewArtist}>
                <div>
                    <label htmlFor="name">Artist Name: </label>
                    <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <div>
                    <label htmlFor="nationality">Nationality: </label>
                    <input onChange={this._handleChange} type="text" name="nationality" value={this.state.nationality} />
                </div>
                <div>
                    <label htmlFor="photo_url">URL of Artist Photo: </label>
                    <input onChange={this._handleChange} type="text" name="photo_url" value={this.state.photo_url} />
                </div>
                <button>Add Artist</button>
                </form>
            </div>
        );
    }
}

export default NewArtist;