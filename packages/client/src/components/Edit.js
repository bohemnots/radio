import React from "react";

import { useAppContext } from "../hooks";
import { metadataUrl } from "../config";

import "./styles/edit.css";

export default function EditPage() {
  const { meta } = useAppContext();
  const [message, setMessage] = React.useState("");

  function onSubmit(e) {
    const { target } = e;
    e.preventDefault();

    const newData = {
      text1: target.text1.value,
      text2: target.text2.value,
      link: target.link.value,
      linkTitle: target.linkTitle.value,
      linkColor: target.linkColor.value,
      linkBackground: target.linkBackground.value,
      imgUrl: target.imgUrl.value,
      t1Color: target.t1Color.value,
      t1Background: target.t1Background.value,
      t2Color: target.t2Color.value,
      t2Background: target.t2Background.value,
      streamUrl: target.streamUrl.value,
      actionColor: target.actionColor.value,
      size: target.size.value,
      password: target.password.value,
    };

    fetch(metadataUrl, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage("success");
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((err) => setMessage(err.message));
  }
  return (
    <div id="edit">
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th align="center" colSpan="3">
                <label>Text 1</label>
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="text1">Value: </label>
              </td>
              <td>
                <input type="text" name="text1" defaultValue={meta.text1} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t1Color">Color: </label>
              </td>
              <td>
                <input type="text" name="t1Color" defaultValue={meta.t1Color} />
              </td>
              <td>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t1Color }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t1Background">Background: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="t1Background"
                  defaultValue={meta.t1Background}
                />
              </td>
              <td>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t1Background }}
                ></div>
              </td>
            </tr>
            <tr>
              <th align="center" colSpan="3">
                <label>Text 2</label>
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="text2">Value: </label>
              </td>
              <td>
                <textarea type="text" name="text2" defaultValue={meta.text2} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t2Color">Color: </label>
              </td>
              <td>
                <input type="text" name="t2Color" defaultValue={meta.t2Color} />
              </td>
              <td>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t2Color }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="t2Background">Background: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="t2Background"
                  defaultValue={meta.t2Background}
                />
              </td>
              <td>
                <div
                  className="block"
                  style={{ backgroundColor: meta.t2Background }}
                ></div>
              </td>
            </tr>
            <tr>
              <th align="center" colSpan="3">
                <label>Link</label>
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="link">Value: </label>
              </td>
              <td>
                <input type="text" name="link" defaultValue={meta.link} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="linkTitle">Title: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="linkTitle"
                  defaultValue={meta.linkTitle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="linkColor">Color: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="linkColor"
                  defaultValue={meta.linkColor}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="linkBackground">Background: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="linkBackground"
                  defaultValue={meta.linkBackground}
                />
              </td>
            </tr>
            <tr>
              <th align="center" colSpan="3">
                <label>Stream</label>
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="streamUrl">Stream URL: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="streamUrl"
                  defaultValue={meta.streamUrl}
                />
              </td>
            </tr>
            <tr>
              <th align="center" colSpan="3">
                <label>Other</label>
              </th>
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
                <label htmlFor="actionColor">Action Color: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="actionColor"
                  defaultValue={meta.actionColor}
                />
              </td>
              <td>
                <div
                  className="block"
                  style={{ backgroundColor: meta.actionColor }}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="size">Size in 'rem': </label>
              </td>
              <td>
                <input type="text" name="size" defaultValue={meta.size} />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password: </label>
              </td>
              <td>
                <input type="password" name="password" defaultValue={""} />
              </td>
              <td>
                <input type="submit" value="Update" />
              </td>
            </tr>
            <tr>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
        <br />
      </form>
    </div>
  );
}
