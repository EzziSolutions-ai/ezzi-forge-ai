import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getService } from "@/data/services";

export default function CustomSoftware() {
  const service = getService("custom-software");
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
