import React from "react";

import useMeta from "../hooks/useMeta";
import { metadataUrl } from "../config";

import "./styles/edit.css";

export default function EditPage() {
  const meta = useMeta();
  const [message, setMessage] = React.useState("");

  function onSubmit(e) {
    const { target } = e;
    e.preventDefault();

    const newData = {
      customName: target.customName.value,
      location: target.location.value,
      imgUrl: target.imgUrl.value,
      t1Color: target.t1Color.value,
      t1Background: target.t1Background.value,
      t2Color: target.t2Color.value,
      t2Background: target.t2Background.value,
      password: target.password.value
    };

    fetch(metadataUrl, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          setMessage("success");
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch(err => setMessage(err.message));
  }
  return (
    <div id="edit">
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="customName">Track Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="customName"
                  defaultValue={meta.customName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="location">Location: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="location"
                  defaultValue={meta.location}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="imgUrl">Image URL: </label>
              </td>
              <td>
                <input type="text" name="imgUrl" defaultValue={meta.imgUrl} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t1Color">T1 Color: </label>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t1Color }}
                ></div>
              </td>
              <td>
                <input type="text" name="t1Color" defaultValue={meta.t1Color} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t2Color">T2 Color: </label>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t2Color }}
                ></div>
              </td>
              <td>
                <input type="text" name="t2Color" defaultValue={meta.t2Color} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t1Background">T1 Background: </label>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t1Background }}
                ></div>
              </td>
              <td>
                <input
                  type="text"
                  name="t1Background"
                  defaultValue={meta.t1Background}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t2Background">T2 Background: </label>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t2Background }}
                ></div>
              </td>
              <td>
                <input
                  type="text"
                  name="t2Background"
                  defaultValue={meta.t2Background}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password: </label>
              </td>
              <td>
                <input type="password" name="password" defaultValue={""} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Update" />
              </td>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
        <br />
      </form>
    </div>
  );
}
