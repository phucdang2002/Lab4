import {createSlice, configureStore} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4} from 'uuid';
// import {useState} from 'react';

export const mapContacts = (contact) => {
  const {name, picture, phone, cell, email} = contact;
  return {
    id: v4(),
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

// const [favoriteIt, setFavoriteIt] = useState([]);
// const updateFavorite = (contactid) =>{
//   let copyFavorite = [...favoriteIt];
//   const index = copyFavorite.findIndex(item=>item.id === contactid);
//   if (index === -1){
//     const getCurrent = contacts.find(item=>item.id === contactid);
//     copyFavorite.push
//   }
//   const {id, name, avatar, phone, cell, email, favorite} = contact;
//   return {
//     id,
//     name,
//     avatar,
//     phone,
//     cell,
//     email,
//     favorite: favorite===false ? true : false,
//   };
// }
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },
});
export const {fetchContactsSuccess} = contactsSlice.actions;
const store = configureStore({
  reducer: contactsSlice.reducer,
});
export default store;
