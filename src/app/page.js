import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import GlobalHeader from "@/globals/header";


export default function Home() {
  return (
    <div>
      <GlobalHeader/>
      <Switch/>
     
    </div>
  );
}
