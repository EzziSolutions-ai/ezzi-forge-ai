import { useParams } from "react-router-dom";
import PlaceholderPage from "./_PlaceholderPage";
export default function CaseStudyDetail() {
  const { slug } = useParams();
  return <PlaceholderPage title={slug ? `Case Study: ${slug}` : "Case Study"} />;
}
