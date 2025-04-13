import axiosInstance from "../api/axiosInstance";

const useAddPlace = () => {
  const addPlace = async (placeData) => {
    const token = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");

    if (!token) {
      throw new Error("No estás autenticado.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const dataWithUser = {
      ...placeData,
      user: userId,
    };

    try {
      const response = await axiosInstance.post(
        "api/places/",
        dataWithUser,
        config
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al añadir el lugar.");
    }
  };

  return addPlace;
};

export default useAddPlace;
