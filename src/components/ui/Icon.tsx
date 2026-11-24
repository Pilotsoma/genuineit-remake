import {
  Activity, AppWindow, ArrowRightLeft, BadgeCheck, BookOpen, Boxes, Building, Cable, ChartColumn, Cloud, CloudCog,
  CodeXml, Contact, Cpu, Database, Ear, Factory, FlaskConical, FolderTree, Fuel, Globe, GraduationCap, Handshake,
  Headset, HeartPulse, Landmark, Layers, LayoutGrid, LifeBuoy, MonitorSmartphone, Network, PenTool, Plane, RadioTower,
  RefreshCcw, Rocket, Server, Settings2, Share2, ShieldCheck, ShoppingCart, SlidersHorizontal, Smartphone, SquareKanban,
  Store, TabletSmartphone, Target, TrainFront, TrendingUp, Umbrella, Users, Warehouse, Workflow, Wrench, Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Activity, AppWindow, ArrowRightLeft, BadgeCheck, BookOpen, Boxes, Building, Cable, ChartColumn, Cloud, CloudCog,
  CodeXml, Contact, Cpu, Database, Ear, Factory, FlaskConical, FolderTree, Fuel, Globe, GraduationCap, Handshake,
  Headset, HeartPulse, Landmark, Layers, LayoutGrid, LifeBuoy, MonitorSmartphone, Network, PenTool, Plane, RadioTower,
  RefreshCcw, Rocket, Server, Settings2, Share2, ShieldCheck, ShoppingCart, SlidersHorizontal, Smartphone, SquareKanban,
  Store, TabletSmartphone, Target, TrainFront, TrendingUp, Umbrella, Users, Warehouse, Workflow, Wrench, Zap,
};

export function Icon({ name, className, strokeWidth = 1.6 }: { name?: string; className?: string; strokeWidth?: number }) {
  const Cmp = (name && icons[name]) || Layers;
  return <Cmp aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
