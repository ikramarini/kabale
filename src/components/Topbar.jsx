import Logo from '../assets/logo.png'

const Topbar = () => {
  return (
    <div className="bg-[#2c3d47] text-white w-full h-[70px] p-4 flex justify-between items-center mx-auto border-b-4 mb-0">

      <a href="#" className="font-black">Kabale</a>


      <div className="flex items-center md:gap-8 gap-1 font-bold">
        <button>Kamus Kite</button>
        <button>Tentang</button>
      </div>

      <a href="#" className="bg-[#282828] w-fit py-2 px-4 rounded-md">
        Kontribusi
      </a>
    </div>
  )
}

export default Topbar
