import PortoflioContainer from "./components/Portfolio/PortoflioContainer";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen overflow-hidden">
      {/* <ThreeScene /> */}
      <PortoflioContainer shouldAppear={true} />
    </div>
  );
}
