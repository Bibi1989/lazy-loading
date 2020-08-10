import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: [],
  });

  const fetchData = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await axios.get(url);
      setState({
        ...state,
        data: response.data,
        loading: false,
      });
    } catch (error) {
      setState({
        ...state,
        error: error,
      });
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);

  return state;
};
