import Link from "next/link";
import Image from "next/image";
import Logo from '../public/logo.png'




export default function Index() {
  return(
    <div className='flex flex-col w-full container mx-auto h-[calc(100vh-100px)] items-center justify-center p-3 space-y-2'>
      <div className="flex w-full flex-col sm:flex-row space-y-2 sm:space-x-2">
        <div className="flex flex-1 flex-col">
          <Image
          src={Logo}
          alt="1/2"
          width={500}
          height={500}
          className="w-full h-full object-contain rounded"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-center">Beni Yenemezsin</h1>
          <p className="text-justify">Kurallar basit. Bu oyunda bilgisayara karşı yarışıyorsun. Başlangıçta elimizde bir sayı oluyor. Daha sonra bu sayıdan 1 veya 2 çıkarıyorsun. 1 sayısının altına (0 veya -1) düşen oyunu kaybediyor.</p>
          <p className="text-justify">Örneğin 15 sayısı başlangıç sayısı olsun. Sen bundan 1 veya 2 çıkarıp hamleni yapıyorsun ve 13 sayısına geliyorsun. Ardından bilgisayar 1 veya 2 çıkarıp hamlesini yapıyor ve 11 sayısına geliyor. 0 veya -1 olan oyunu kaybediyor.</p>
        </div>
      </div>
      <Link href={'/play'} className="btnBlue">Oyna</Link>
    </div>
  )
}