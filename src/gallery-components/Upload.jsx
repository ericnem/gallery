import propTypes from "prop-types";

function Upload({ onAddPhoto }) {
  return (
    <button
      onClick={() => {
        onAddPhoto(null);
      }}
      className="upload"
      id="gallery-upload"
      data-testid="upload-button"
    />
  );
}

export default Upload;

Upload.propTypes = {
  onAddPhoto: propTypes.func.isRequired,
};
