import {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {mapContacts, fetchContactsSuccess} from './Store';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import ContactListItem from './ContactListItem';
import axios from 'axios';

const keyExtractor = ({phone}) => phone;

const fetchContacts = async () => {
  const contacts = await axios.get('https://randomuser.me/api/?results=50');
  const ContactData = await contacts.data;
  return ContactData.results.map(mapContacts);
};
// const data = [];
// export const updateFavorite = (contactid) =>{
//     const current = data.find(item=>item.id === contactid);
//     current.favorite = current.favorite===true?false:true;
//   }
// }

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {});
  }, []);
  const renderContacts = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Contacts;
