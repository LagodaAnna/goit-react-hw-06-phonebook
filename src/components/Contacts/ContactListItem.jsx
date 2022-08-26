import PropTypes from 'prop-types';
import { ContactItem, Name, Number, Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <Name> {name}</Name> <Number>{number}</Number>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
