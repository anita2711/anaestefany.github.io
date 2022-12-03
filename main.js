let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('bienvenido..soy desarrolladora de sitios web')
  .pauseFor(200)
  .deleteChars(10)
  .start();