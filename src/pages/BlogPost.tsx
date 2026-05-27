import { Navigate } from "react-router-dom";

export default function BlogPost() {
  // No posts yet — bounce visitors to the blog index until we publish.
  return <Navigate to="/blog" replace />;
}
