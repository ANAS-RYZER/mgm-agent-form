

import axios from 'axios';

const useGetSingleFileUrl = () => {
  const getFileUrl = async (id: string) => {
    try {
      const response = await axios.get(
        // `https://staging-backend.ryzer.app/api/s3-file/${id}/s3Url`
        `http://localhost:5050/assets/${id}/url`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching fileUrl:', error);
      throw error;
    }
  };
  return {
    getFileUrl,
  };
};

export default useGetSingleFileUrl;
