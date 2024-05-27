import Image from "next/image";
import profileImgdark from '@/public/logo.png';

const LoginScreen = () => {
  return (
    <div className='bg-slate-800 font-bold text-gray-300 py-8 px-4 rounded-sm flex flex-col gap-4 w-80'>
      <div className="flex justify-center">
        <Image src={profileImgdark} alt="alt" width={150} height={100} />
      </div>
      <input type="text" placeholder="Username" className='w-full px-4 py-2 rounded-sm'/>
      <input type="password" placeholder="Password" className='w-full px-4 py-2 rounded-sm'/>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-sm text-center font-bold'>Login</button>
    </div>
  );
};

export default LoginScreen;
