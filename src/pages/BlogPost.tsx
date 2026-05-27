import { useParams } from "react-router-dom";
import PlaceholderPage from "./_PlaceholderPage";
export default function BlogPost() {
  const { slug } = useParams();
  return <PlaceholderPage title={slug ? `Post: ${slug}` : "Blog Post"} />;
}
