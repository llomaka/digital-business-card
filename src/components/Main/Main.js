import Button from "../Button/Button";
import photo from "../../images/photo.jpg";

export default function Main() {
  return (
      <div className="main container">
        <img className="main--image" src={photo} alt="Lilia Lomaka"/>
        <div className="main--caption">
          <h1 className="main--name">Lilia Lomaka</h1>
          <p className="main--title">Trainee Full Stack Developer (JS, React)</p>
          <p className="visually-hidden main--website">lilialomaka.website</p>
          <div className="main--links">
            <Button
              key="email"
              text="Email"
              icon='<svg class="link--icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path d="M2.102 4.707 8.5 7.906l6.398-3.199A1.6 1.6 0 0 0 13.3 3.2H3.7a1.6 1.6 0 0 0-1.598 1.507Z"/><path d="m14.9 6.494-6.4 3.2-6.4-3.2V11.2a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V6.494Z"/></svg>'
              clas="main--link main--link-email"
              link="mailto:llomaka80@gmail.com"
            />
            <Button
              text="GitHub"
              icon='<svg class="link--icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M22.822.5H3.18A2.68 2.68 0 0 0 .5 3.18v19.643A2.68 2.68 0 0 0 3.18 25.5h19.642a2.68 2.68 0 0 0 2.679-2.678V3.178A2.68 2.68 0 0 0 22.822.5Zm-6.847 21.412c-.468.084-.641-.207-.641-.447 0-.3.01-1.841.01-3.085 0-.871-.29-1.424-.63-1.714 2.065-.228 4.241-.513 4.241-4.079 0-1.015-.362-1.523-.954-2.176.095-.24.413-1.228-.095-2.511-.776-.24-2.55.998-2.55.998a8.694 8.694 0 0 0-2.322-.312c-.786 0-1.584.106-2.321.313 0 0-1.775-1.24-2.55-1-.508 1.279-.196 2.266-.095 2.512-.592.653-.87 1.16-.87 2.176 0 3.55 2.08 3.85 4.146 4.08-.268.24-.508.652-.592 1.244-.53.24-1.886.653-2.695-.776a1.944 1.944 0 0 0-1.423-.954c-.904-.011-.062.57-.062.57.603.278 1.027 1.35 1.027 1.35.541 1.657 3.13 1.099 3.13 1.099 0 .776.012 2.037.012 2.265 0 .24-.168.53-.642.447-3.683-1.233-6.261-4.738-6.261-8.834 0-5.123 3.917-9.012 9.04-9.012 5.123 0 9.275 3.89 9.275 9.012.005 4.096-2.495 7.606-6.178 8.834Zm-5.474-3.41c-.106.023-.207-.022-.218-.095-.01-.083.062-.156.168-.178.106-.011.206.033.217.106.017.072-.055.145-.167.167Zm-.53-.05c0 .073-.084.134-.195.134-.123.011-.207-.05-.207-.134 0-.073.084-.134.195-.134.106-.011.207.05.207.134Zm-.765-.061c-.022.072-.134.106-.228.072-.106-.022-.179-.106-.157-.178.023-.073.134-.106.23-.084.11.033.183.117.155.19Zm-.686-.302c-.05.062-.156.05-.24-.033-.084-.073-.106-.179-.05-.229.05-.061.156-.05.24.034.072.072.1.184.05.228Zm-.508-.508c-.05.034-.145 0-.206-.083-.062-.084-.062-.179 0-.218.061-.05.156-.011.206.073.062.083.062.184 0 .228Zm-.363-.54c-.05.05-.134.022-.195-.034-.061-.073-.072-.157-.022-.196.05-.05.134-.022.195.034.061.073.073.156.022.195Zm-.373-.414c-.023.05-.095.062-.157.023-.072-.034-.106-.095-.083-.145.022-.034.083-.05.156-.023.072.04.106.1.084.145Z"/></svg>'
              clas="main--link main--link-github"
              link="https://github.com/llomaka"
            />
          </div>
          <h2 className="main--header">About myself</h2>
          <p className="main--text">I am a frontend developer seeking to simplify routine tasks. I try to keep up with security and best practices, and like to learn new things.</p>
          <h2 className="main--header">Interests</h2>
          <p className="main--text">Reader. Travel and Sports enthusiast.</p>
        </div>
      </div>
    )
}
