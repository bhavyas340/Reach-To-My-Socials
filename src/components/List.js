import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bhavya-deep-sharma-b5a745217/",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com/bhavyas340",
        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Blog post",
        link: "https://stocks-market-and-mutual-funds.blogspot.com/",
        icon:
          "data:image/png;base64,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",
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {data.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default List;
