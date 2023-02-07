import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

const handleImageCompression = () => {
  const [data, setData] = useState({ avatar: [] });

  const onClickImageUpload = (files, type, index) => {
    setData({
      ...data,
      avatar: files,
    });
  };

  const onSubmit = async () => {
    actionImgCompress(data.avatar[0].files);
  };

  const actionImgCompress = async (fileSrc) => {
    console.log('압축시작');

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      //압축결과
      const compressedFile = await imageCompression(fileSrc, options);
    } catch (err) {
      console.log(err);
    }
  };

  return <div>imageCompression</div>;
};

export default handleImageCompression;
