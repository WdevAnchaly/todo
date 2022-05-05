import React, { useEffect, useState } from "react";


/**
 * https://stackoverflow.com/questions/66434403/how-to-get-multiple-checkbox-values-in-react-js
 */

const data = [
  {
    id: "1",
    name: "Jane",
    lastName: "Doe",
    age: "25"
  },
  {
    id: "2",
    name: "James",
    lastName: "Doe",
    age: "40"
  },
  {
    id: "3",
    name: "Alexa",
    lastName: "Doe",
    age: "27"
  },
  {
    id: "4",
    name: "Jane",
    lastName: "Brown",
    age: "40"
  }
];

export default function Checkbox() {
  const [peopleInfo, setPeopleInfo] = useState({});

  const toggleHandler = (item) => () => {
    setPeopleInfo((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            first: item.name,
            last: item.lastName,
            age: item.age
          }
    }));
  };

  useEffect(() => {
    console.log(peopleInfo);
  }, [peopleInfo]);

  return (
    <div className="App">
      <table>
        <tr>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  width: "150px"
                }}
              >
                <input
                  onChange={toggleHandler(item)}
                  checked={peopleInfo[item.id]}
                  style={{ margin: "20px" }}
                  type="checkbox"
                />
                <td style={{ margin: "20px" }}>{item.name}</td>
                <td style={{ margin: "20px" }}>{item.lastName}</td>
                <td style={{ margin: "20px" }}>{item.age}</td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
}
