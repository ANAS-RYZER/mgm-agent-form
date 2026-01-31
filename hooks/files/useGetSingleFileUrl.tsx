

import axios from 'axios';

const useGetSingleFileUrl = () => {
  const getFileUrl = async (id: string) => {
    try {
      const response = await axios.get(
        `https://mgm-backend.vercel.app/assets/${id}/url`
        // `http://localhost:5050/assets/${id}/url`
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
