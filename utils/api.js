// 2124802010151 - Lê Sỹ Hoài
export const fetchContacts = () => {
    return fetch('https://randomuser.me/api/?results=100&seed=fullstackio')
      .then(res => res.json())
      .then(data => data.results);
  };
  
  export const fetchUserContact = () => {
    return fetch('https://randomuser.me/api/?seed=fullstackio')
      .then(res => res.json())
      .then(data => data.results[0]);
  };
  
  export const fetchRandomContact = () => {
    return fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => data.results[0]);
  };
  