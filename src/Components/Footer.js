import { FaFacebookF, FaTwitter } from 'react-icons/fa';
export default function Footer(){
    return(
        <div className="w-full mt-6 sticky top-[100vh]"> 
            <div className="bg-footer h-32 xs:h-24 w-full text-white">
                <div className='pl-10 flex flex-col items-start'>
                <ul className="flex flex-col xs:flex-row pb-3">
                    <li className='cursor-default'><strong className="text-xs font-medium mx-2 hover:text-gray-300 cursor-pointer" href="#">Anasayfa  </strong>|</li>
                    <li className='cursor-default'><strong className="text-xs font-medium mx-2 hover:text-gray-300 cursor-pointer" href="#">Kullanıcı Sözleşmesi  </strong>|</li>
                    <li className='cursor-default'><strong className="text-xs font-medium mx-2 hover:text-gray-300 cursor-pointer" href="#">Gizlilik Sözleşmesi</strong></li>
                </ul>
                <ul className="flex flex-row">
                    <li className='pr-2'><FaFacebookF cursor="pointer" size="35" color='white'/></li>
                    <li className='pl-2'><FaTwitter cursor="pointer" size="35" color='white'/></li>
                </ul></div>
            </div>
            <div className="bg-acikgri pt-px h-6 w-full text-white"></div>
        </div>
    );
}