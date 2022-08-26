import ContactListItem from './ContactListItem';
import { List } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getChangedFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const filter = useSelector(getChangedFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} id={id} name={name} number={number} />
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
