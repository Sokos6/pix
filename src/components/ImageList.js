import React from 'react'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={image.urls.regular} />
  });

  return <div>{images}</div>;
}

export default ImageList;