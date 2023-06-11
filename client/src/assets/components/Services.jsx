/* eslint-disable react/prop-types */
const Services = ({ services }) => {
  return (
    <div>
      <h1>Services:</h1>
      {services.map((service) => {
        return (
          <div key={service.name}>
            <h3>{service.name}</h3>
            <h4>{service.description}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
