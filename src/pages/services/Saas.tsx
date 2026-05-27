import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getService } from "@/data/services";

export default function Saas() {
  const service = getService("saas");
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
