import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600 font-medium mt-2">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
