// const getApps = (key) => {
//   try {
//     const stored = localStorage.getItem(key);
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// };

// const saveApps = (key, apps) => {
//   localStorage.setItem(key, JSON.stringify(apps));
// };

// export const getAppsID = () => getApps("apps");

// export const isApp = (id) => {
//   return getAppsID().includes(id);
// };

// export const addApp = (id) => {
//   const ideas = getAppsID();
//   if (!ideas.includes(id)) {
//     ideas.push(id);
//     saveApps("apps", apps);
//   }
// };

// export const getAppsID = () => getApps("unwantedIdeas");

// export const isIdeaUnwanted = (id) => {
//   return getAppsID().includes(id);
// };

// export const addApp = (id) => {
//   const ideas = getAppsID();
//   if (!ideas.includes(id)) {
//     ideas.push(id);
//     saveApps("unwantedIdeas", apps);
//   }
// };

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
    alert("Already exists");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installedApps", data);
  }
};

export { addToStoredDB, getStoredApp };
