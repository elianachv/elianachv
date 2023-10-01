import code from "../../assets/code3.png";
import "./CodePhrase.scss";

function CodePhrase() {
  return (
    <div className="codePhrase">
      {/* <div className="codePhrase__img">
        <img src={code} alt="" srcset="" />
      </div> */}

      <div className="codePhrase__text">
        <p>La vida se mide en las líneas de código que te dejan sin aliento</p>

        <p>- Anónimo</p>
      </div>
    </div>
  );
}

export default CodePhrase;
