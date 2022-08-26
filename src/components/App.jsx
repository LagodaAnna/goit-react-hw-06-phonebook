import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts';
import Box from './Box';

export const App = () => {
  return (
    <Box
      width="60%"
      minHeight="100vh"
      my={0}
      mx="auto"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg="mainBg"
      borderRadius="normal"
    >
      <Box mb={6} p={4} bg="secondaryBg" borderRadius="normal">
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
      </Box>

      <Box p={4} minHeight="250px" bg="secondaryBg" borderRadius="normal">
        <h2>Contacts</h2>
        <ContactList />
      </Box>
    </Box>
  );
};
