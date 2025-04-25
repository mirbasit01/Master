//'use client' // Keep this if using App Router, remove if in pages/

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* You might want to style this button too */}
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {/* Use a specific shade like text-green-600 */}
      {/* Also add some padding/background for better appearance */}
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2" // Example styling for Sign In
      >
        Sign in
      </button>
       {/* Or if you specifically want green text on a default background: */}
       <button
        onClick={() => signIn()}
        className="text-green-600 hover:text-green-800 font-semibold py-2 px-4" // Example with only text color
      >
        Sign in (Green Text)
      </button>
    </>
  );
}