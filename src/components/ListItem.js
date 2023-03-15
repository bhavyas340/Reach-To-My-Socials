import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <div className="ListItem" style={{ backgroundColor: item.bgColor }}>
        <img src={item.icon} alt={item.name} />
        <a href={item.link}>{item.name}</a>
      </div>
    );
  }
}

export default ListItem;
