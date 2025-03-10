import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Playground() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    if (!window.confirm("Are you sure you want to delete your account?"))
      return;

    try {
      const res = await fetch("http://localhost:5000/delete", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      alert("Account deleted successfully!");
    } catch (err) {
      console.error("Failed to delete account:", err.message);
    }
  };

  return (
    <>
      <div className='flex flex-col bg-white min-h-screen'>
        <div className='flex items-center justify-center flex-1 my-20'>
          <div className='max-w-4xl px-4 py-8 mx-auto text-center'>
            <h1 className='text-2xl font-bold tracking-tight text-neutral-800 sm:text-4xl'>
              This page is currently under development.
            </h1>

            <p className='mt-4 text-neutral-700'>
              My apologies for any inconvenience this may have caused.
            </p>
          </div>
        </div>
      </div>
    </>
    // <div className='p-6 min-h-screen'>
    //   <h1 className='text-2xl font-bold tracking-tight text-neutral-800 sm:text-4xl'>
    //     {user ? `Hello, ${user.name}!` : "Hello!"}
    //   </h1>

    //   {user ? (
    //     <div className='flex gap-4 mt-4'>
    //       <button
    //         onClick={handleLogout}
    //         className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white'
    //       >
    //         Logout
    //       </button>
    //       <button
    //         onClick={handleDeleteAccount}
    //         className='bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white'
    //       >
    //         Delete Account
    //       </button>
    //     </div>
    //   ) : (
    //     <div className='flex gap-4 mt-4'>
    //       <button
    //         onClick={() => {
    //           setIsRegister(false);
    //           setShowModal(true);
    //         }}
    //         className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white'
    //       >
    //         Login
    //       </button>
    //       <button
    //         onClick={() => {
    //           setIsRegister(true);
    //           setShowModal(true);
    //         }}
    //         className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white'
    //       >
    //         Register
    //       </button>
    //     </div>
    //   )}

    //   {/* Modal Login/Register */}
    //   <AuthModal
    //     isOpen={showModal}
    //     onClose={() => setShowModal(false)}
    //     isRegister={isRegister}
    //   />
    // </div>
  );
}
