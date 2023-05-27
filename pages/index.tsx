import Link from "next/link";





export default function Index() {
  return(
    <div className='flex flex-col w-full container mx-auto h-[calc(100vh-100px)] items-center justify-center p-3'>
      <h1 className="text-center">Beni Yenemezsin</h1>
      <p className="text-justify">Kurallar basit. Bu oyunda bilgisayara karşı yarışıyorsun. Başlangıçta elimizde bir sayı oluyor. Daha sonra bu sayıdan 1 veya 2 çıkarıyorsun. 1 sayısının altına (0 veya -1) düşen oyunu kaybediyor.</p>
      <p className="text-justify">Örneğin 15 sayısı başlangıç sayısı olsun. Sen bundan 1 veya 2 çıkarıp hamleni yapıyorsun ve 13 sayısına geliyorsun. Ardından bilgisayar 1 veya 2 çıkarıp hamlesini yapıyor ve 11 sayısına geliyor. 0 veya -1 olan oyunu kaybediyor.</p>
      <Link href={'/play'} className="btnBlue">Oyna</Link>
    </div>
  )
}