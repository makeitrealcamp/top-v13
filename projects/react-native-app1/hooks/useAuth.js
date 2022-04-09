import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// CUSTOM HOOK
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    getData();
  }, []);

  // Data Persist
  const storeData = useCallback(async (value) => {
    try {
      await AsyncStorage.setItem("isAuthenticated", value);
    } catch (e) {
      // saving error
    }
  }, []);

  const getData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("isAuthenticated");
      if (value !== null) {
        // value previously stored
        setIsAuthenticated(value);
      }
    } catch (e) {
      // error reading value
    }
  }, [setIsAuthenticated]);

  return {
    isAuthenticated,
    storeData,
  };
};

export default useAuth;
