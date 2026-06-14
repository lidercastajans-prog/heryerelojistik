import {
  Home,
  Truck,
  ArrowUpDown,
  Building2,
  Package,
  Warehouse,
  ShieldCheck,
  Clock,
  Wrench,
  Boxes,
  MapPin,
  Route,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconKey } from "@/lib/services";

const ICONS: Record<IconKey, ComponentType<LucideProps>> = {
  Home,
  Truck,
  ArrowUpDown,
  Building2,
  Package,
  Warehouse,
  ShieldCheck,
  Clock,
  Wrench,
  Boxes,
  MapPin,
  Route,
};

export default function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  const Cmp = ICONS[name];
  return <Cmp aria-hidden {...props} />;
}
