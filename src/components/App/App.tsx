import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import { useAllStarships } from "../../utils/SwapiService";

const App: React.FC = () => {
  const { data, error, loading } = useAllStarships();

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
