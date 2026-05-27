import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getService } from "@/data/services";

export default function WebApp() {
  const service = getService("web-app");
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
