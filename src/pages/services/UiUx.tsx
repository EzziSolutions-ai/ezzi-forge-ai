import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getService } from "@/data/services";

export default function UiUx() {
  const service = getService("ui-ux");
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
