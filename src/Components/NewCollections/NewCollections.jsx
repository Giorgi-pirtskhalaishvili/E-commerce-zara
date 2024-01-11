import "./newCollections.css";
import newCollection from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <div className="newCollections">
      <h1> NEW COLLECTIONS </h1>
      <hr className="underLine" />
      <div className="collections">
        {newCollection.map((item) => (
          <Item
            className="item"
            key={item.id}
            name={item.name}
            id={item.id}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
