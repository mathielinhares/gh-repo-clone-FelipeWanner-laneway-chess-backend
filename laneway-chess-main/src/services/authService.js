import api from '../api'; // Import your Axios instance

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    const { accessToken } = response.data;
    
    // Store the access token in localStorage
    localStorage.setItem('accessToken', accessToken);

    return response.data; // Return any data you need from the response
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};