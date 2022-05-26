import Herobanner from '../component/Herobanner'
import Subsection from "../component/Subsection";
import Subsection2 from "../component/Subsection2";

export default function Home({ children }) {
  return (
    <div>
      <main>
        <Herobanner />
        <Subsection />
        <Subsection2 />
        {children}
      </main>
    </div>
  );
}
