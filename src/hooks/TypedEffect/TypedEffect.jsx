import Typed from "typed.js";
import { useRef, useEffect } from "react";

const TypedEffect = ({ texts, classes}) => {
  const element = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: texts,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    };

    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span className={classes} style={{ whiteSpace: "pre" }} ref={element} />
      </div>
    </div>
  );
};

export default TypedEffect;
