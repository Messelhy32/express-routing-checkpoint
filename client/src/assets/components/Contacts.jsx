/* eslint-disable react/prop-types */
const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts:</h1>
      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <h3>{contact.email}</h3>
            <h4>{contact.phone}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
