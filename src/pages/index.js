import Aside from "./aside";
import Main from "./main";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
  })

export default function Home() {
  return (
    <div className={`top-class ${poppins.className}`}>
      <Aside />
      <Main />
    </div>
  );
}
