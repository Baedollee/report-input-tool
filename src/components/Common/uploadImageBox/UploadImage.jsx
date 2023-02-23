import React, { useRef } from 'react';

const UploadImage = (props) => {
  const fileInputInfo = useRef(null);
  const handleClick = (e) => {
    fileInputInfo.current.click();
  };
  const handleChangeUpload = (e) => {
    props.handleFile(e);
  };

  return (
    <>
      <button text={props.text} onClick={(e) => handleClick(e)}>
        <input
          type='file'
          id={props.id}
          accept={props.extension}
          ref={fileInputInfo}
          style={{ display: 'none' }}
          onChange={(e) => handleChangeUpload(e)}
        />
        등록
      </button>
    </>
  );
};

UploadImage.defaultProps = {
  extension: '.xls, .xlsx, jpg, gif',
  text: '파일 업로드',
  id: '',
};

export default UploadImage;
