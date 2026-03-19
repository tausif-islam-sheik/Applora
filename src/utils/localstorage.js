import { Bounce } from "react-toastify";
import { toast } from "react-toastify";

const getStoredApp = () => {
  const storedApp = localStorage.getItem("installedApps");
  if (storedApp) {
    const storedAppData = JSON.parse(storedApp);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    toast.warn("Already exists!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installedApps", data);
  }
};

const removeStoredApp = (id) => {
  const storedApps = getStoredApp();

  const updatedApps = storedApps.filter(
    (storedId) => parseInt(storedId) !== parseInt(id),
  );

  localStorage.setItem("installedApps", JSON.stringify(updatedApps));
};

export { addToStoredDB, getStoredApp, removeStoredApp };
