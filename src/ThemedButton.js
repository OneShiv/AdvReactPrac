import React from "react";
import { ThemeContext } from "./themeContext";
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    console.log(theme.background);
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}

export default ThemedButton;
