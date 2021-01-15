import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

interface ICustomSwitch {
  title: string;
  onClick: (checked: boolean) => void;
  value: boolean;
}

const CustomSwitch: React.FC<ICustomSwitch> = ({ title, onClick, value }) => {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={value}
        onChange={() => onClick(!value)}
      />
      <label className="custom-control-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CustomSwitch;
