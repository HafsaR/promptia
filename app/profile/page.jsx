"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/profile";

const MyProfile = () => {
  const {data: session} = useSession();
  const [posts, setPosts] = useState([])

  const handleEdit = () => {};

  const handleDelete = async () => {};

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/[users]/${session?.user.id}/posts`);
      const data = await response.json();
      setPost(data);
    };
   if(session?.user.id) fetchPost();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalize profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
