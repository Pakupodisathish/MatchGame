import './index.css'

const ImageItem = props => {
  const {imageItemDetails, onClickImageItem} = props
  const {id, thumbnailUrl} = imageItemDetails
  const onClickImage = () => {
    onClickImageItem(id)
  }
  return (
    <li className="image-item-container">
      <button
        className="image-btn-container"
        type="button"
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} className="image-item" alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
