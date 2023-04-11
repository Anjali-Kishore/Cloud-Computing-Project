


export const getRawData = () => {
    return fetch("https://engineering-task.elancoapps.com/api/raw").then((res) => res.json());
  };
  
  export const getApplications = () => {
    return fetch("https://engineering-task.elancoapps.com/api/applications").then((res) => res.json());
  };
  
  export const getResources = () => {
    return fetch("https://engineering-task.elancoapps.com/api/resources").then((res) => res.json());
  };
  
  // export const getApplicationData = () => {
  //   return fetch(`https://engineering-task.elancoapps.com/api/applications/${application}`).then((res) => res.json());
  // };
  // export const getResourceData = () => {
  //   return fetch(`https://https://engineering-task.elancoapps.com/api/resources/${resource}`).then((res) => res.json());
  // };