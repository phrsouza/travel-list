export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packaging list 🚀</em>
      </p>
    );
  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed === true).length;
  const packedItemsPercentage = Math.round(
    (totalPackedItems / totalItems) * 100
  );
  console.log(packedItemsPercentage);

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳 you have ${totalItems} items on your list, and you already packed(${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}
