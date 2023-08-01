/* eslint-disable react/prop-types */

const Navigation = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <ul>
        <li>
          <a href="#">Topic 1</a>
        </li>
        <li>
          <a href="#">Topic 2</a>
        </li>
        <li>
          <a href="#">Topic 3</a>
        </li>
        <li>
          <a href="#">Topic 4</a>
        </li>
        <input type="text" placeholder="Search..." />
      </ul>
    </div>
  );
};

export default Navigation;
