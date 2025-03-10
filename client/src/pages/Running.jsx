import { useState } from "react";

export default function RunningQuestionnaire() {
  const [nickname, setNickname] = useState("");
  const [everRunCFD, setEverRunCFD] = useState("");
  const [distance, setDistance] = useState("");
  const [pace, setPace] = useState("");
  const [eatPlace, setEatPlace] = useState("");

  const sendWhatsApp = () => {
    const message =
      `hi, kress! ini gue ${nickname} hehehe%0A%0A` +
      `nanti gue mau dong ikut lari di cfd abis puasa, ${distance} km ajaaa, pacenya santai-santai aja di ${pace}%0A%0A` +
      `pankapan abis lari kita cobain makan di ${eatPlace} yaaa😅`;
    const waLink = `https://wa.me/6281314250902?text=${message}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className='flex flex-col items-center min-h-screen p-4 bg-gray-100'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>
          Kuisioner Lari
        </h1>
        <div className='space-y-4'>
          <label className='block text-gray-600'>Nama panggilan</label>
          <input
            type='text'
            placeholder='Masukkan nama panggilan'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            Pernah long run di CFD Sudirman?
          </label>
          <select
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={everRunCFD}
            onChange={(e) => setEverRunCFD(e.target.value)}
          >
            <option
              value=''
              disabled
            >
              Pilih salah satu
            </option>
            <option value='Tidak'>Tidak</option>
            <option value='Pernah'>Pernah</option>
          </select>

          <label className='pt-8 block text-gray-600'>
            Kalau long run biasanya berapa km?
          </label>
          <input
            type='number'
            placeholder='Masukkan angka aja (contoh: 20)'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            Kalau long run biasanya pace berapa?
          </label>
          <input
            type='text'
            placeholder='Masukkan pace (contoh: 6:30)'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={pace}
            onChange={(e) => setPace(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            Kalau abis CFD biasanya suka/pernah makan dimana?
          </label>
          <input
            type='text'
            placeholder='Masukkan tempat makan favorit'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={eatPlace}
            onChange={(e) => setEatPlace(e.target.value)}
          />

          <div className='pt-8'>
            <button
              onClick={sendWhatsApp}
              className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
