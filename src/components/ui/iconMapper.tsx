import {
  Building,
  Home,
  Wrench,
  Truck,
  HardHat,
  PuzzleIcon as Puzzle,
  PaintBucket,
  Building2,
  Hammer,
  Drill,
  Ruler,
  Bolt,
  Fence,
  Shovel,
  Briefcase,
  Scissors
} from 'lucide-react';

// Define components outside the object
function BuildingIcon() { return <Building size={32} />; }
function HomeIcon() { return <Home size={32} />; }
function WrenchIcon() { return <Wrench size={32} />; }
function TruckIcon() { return <Truck size={32} />; }
function HardHatIcon() { return <HardHat size={32} />; }
function PuzzleIcon() { return <Puzzle size={32} />; }
function PaintBucketIcon() { return <PaintBucket size={32} />; }
function Building2Icon() { return <Building2 size={32} />; }
function HammerIcon() { return <Hammer size={32} />; }
function DrillIcon() { return <Drill size={32} />; }
function RulerIcon() { return <Ruler size={32} />; }
function BoltIcon() { return <Bolt size={32} />; }
function FenceIcon() { return <Fence size={32} />; }
function ShovelIcon() { return <Shovel size={32} />; }
function BriefcaseIcon() { return <Briefcase size={32} />; }
function ScissorsIcon() { return <Scissors size={32} />; }

const iconMap: Record<string, () => JSX.Element> = {
  Building: BuildingIcon,
  Home: HomeIcon,
  Wrench: WrenchIcon,
  Truck: TruckIcon,
  HardHat: HardHatIcon,
  Puzzle: PuzzleIcon,
  PaintBucket: PaintBucketIcon,
  Building2: Building2Icon,
  Hammer: HammerIcon,
  Drill: DrillIcon,
  Ruler: RulerIcon,
  Bolt: BoltIcon,
  Fence: FenceIcon,
  Shovel: ShovelIcon,
  Briefcase: BriefcaseIcon,
  Scissors: ScissorsIcon,
};

export const getIconByName = (name: string): JSX.Element => {
  const IconComponent = iconMap[name] || WrenchIcon;
  return <IconComponent />;
};
