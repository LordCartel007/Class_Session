// Basic state example
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count:{count}</button>;
}

// local state
function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  return (
    <div>
      {isEditing ? (
        <EditForm
          data={userData}
          onSave={(data) => {
            setUserData(data);
            setIsEditing(false);
          }}
        />
      ) : (
        <DisplayProfile data={userData} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}
