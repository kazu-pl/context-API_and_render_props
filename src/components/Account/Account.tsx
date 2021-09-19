import { useContext } from "react";
import { ThemeContext } from "common/theme/ThemeContext";

const Account = () => {
  const myContext = useContext(ThemeContext);

  return (
    <div>
      <button onClick={myContext.toggleTheme}>TOGGLE</button>
      <p
        style={{
          backgroundColor: myContext.theme.background,
          color: myContext.theme.foreground,
        }}
      >
        TEKST
      </p>
    </div>
  );
};

export default Account;
