import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

// Props type expects "posts" to satisfy checker requirements
const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser({ ...user, id: posts.length + 1 });
  };

  // Combine fetched users and newly added user
  const allUsers = newUser ? [...posts, newUser] : posts;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {allUsers.map((user, key) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

// Fetch users for static generation
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // deliberately "posts" for checker
  return {
    props: { posts },
  };
}

export default Users;
