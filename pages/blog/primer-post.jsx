import Link from 'next/link';
import Image from 'next/image';


export default function primerPost() {
  return (
    <div>
        <h2>
            <Link href={"/blog"}>
                <a className='ancla'>Back to blog</a>
            </Link>
        </h2>
        <h1>La imagen</h1>
        <Image src = '/img/uno.jpeg'
            height={600} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt = "test image">

        </Image>
    </div>
  )
}
