import React, { useState } from 'react';
// import ImagePicker from 'antd-mobile/lib/image-picker';
import imageCompression from 'browser-image-compression';

const HandleImageCompression = () => {
  const [data, setData] = useState({
    avatar: [],
  });

  const onClickImageUpload = (files, type, index) => {
    setData({
      ...data,
      avatar: files,
    });
  };

  const onSubmit = async () => {
    actionImgCompress(data.avatar[0].file);
  };

  const actionImgCompress = async (fileSrc) => {
    console.log('압축 시작');

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(fileSrc, options);

      // const reader = new FileReader();
      // reader.readAsDataURL(compressedFile);
      // reader.onloadend = () => {
      //   const base64data = reader.result;
      //   imageHandling(base64data);
      // };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        files={data.avatar}
        onChange={onClickImageUpload}
        onImageClick={(index, fs) => console.log(index, fs)}
        accept='image/gif,image/jpeg,image/jpg,image/png'
      />
      <button type='ghost' onClick={onSubmit}>
        저장하기
      </button>
    </>
  );
};

export default HandleImageCompression;
