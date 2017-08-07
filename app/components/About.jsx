var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Component</h1>
      <p>Ceci est une application React conçue en React. J'ai construis cette application pour apprendre à créer des applications React. Contactez-moi si vous êtes intéréssé pour que nous créeons votre app React ensemble.</p>
      <p>Voici quelque outils que j'utilise:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - ceci était le JavaScript utilisé.</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - ceci est l'API que j'ai utilisé pour les températures.</li>
      </ul>
    </div>
  )
};

module.exports = About;
