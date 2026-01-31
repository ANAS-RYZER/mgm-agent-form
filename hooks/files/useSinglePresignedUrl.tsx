

import axios from 'axios';

const useSinglePresignedUrl = () => {
  const getSinglePresignedUrl = async ({
    fileName,
    mimeType,
    fileSize,
    refId,
    belongsTo,
  }: {
    fileName: string;
    mimeType: string;
    fileSize: number;
    refId: string;
    belongsTo: string;
  }) => {
    try {
      const response = await axios.post(
        // 'https://staging-backend.ryzer.app/api/s3-file/upload-single',
        'http://localhost:5050/assets/upload-single',
        {
          fileName,
          mimeType,
          fileSize,
          refId,
          belongsTo,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { getSinglePresignedUrl };
};
export default useSinglePresignedUrl;
