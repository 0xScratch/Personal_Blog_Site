import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
        <Image 
            src="/images/DP.jpg" 
            alt="Aryan Malik" 
            width={210} 
            height={210} 
            priority={true} 
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"/>
    </section>
  )
}