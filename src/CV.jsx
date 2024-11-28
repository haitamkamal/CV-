function CV({ fullName, email, telephone, address, exprience, arrStudies, removeStudy }) {
  const languages = ['French', 'Arabic', 'English'];

  return (
    <>
      <div className="Header">
        <h1>{fullName}</h1>
      </div>

      <div className="Sidebar">
        <div className="information">
          <p>{email}</p>
          <p>{telephone}</p>
          <p>{address}</p>
        </div>
        <div className="languages">
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="MainContent">
        <p>{exprience}</p>

        <ul>
          {arrStudies.map((study, index) => (
            <li 
              key={index} 
              onClick={() => removeStudy(index)}
            >
              {study}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CV;
