import React, { Component } from 'react';
import ImageListComponent from './ImageListComponent';
import Header from './Header';

class ImagePanelComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <ImageListComponent />
            </div>
        )
    }
}

export default ImagePanelComponent;