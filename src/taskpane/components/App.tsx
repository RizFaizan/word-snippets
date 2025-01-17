/* eslint-disable no-undef */
import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import AppRouter from "./router/AppRouter";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC = () => {
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.

  return (
    <div className={styles.root}>
      <AppRouter />
    </div>
  );
};

export default App;
