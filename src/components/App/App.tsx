import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import { useFetch } from "../hooks/useFetch";

const App: React.FC = () => {
  const { data, error, loading } = useFetch("https://swapi.dev/api/planets/1/");

  if (loading) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      {!error ? (
        <div className={cn(styles.app)}>
          <div>Данные</div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div className={cn(styles.app)}>
          <div>Ошибка</div>
          {error}
        </div>
      )}
    </>
  );
};

export default App;
