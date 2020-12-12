import React from 'react';
import './ImageUpload.css';
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="imgset" src={imagePreviewUrl} alt="imag2" />);
    } else {
      $imagePreview = (<div className="previewText">No Image Selected</div>);
    }

    return (
      <div className="previewComponent">
        <h4>Group Logo</h4>
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
        </form>
      </div>
    )
  }
}

export default ImageUpload;