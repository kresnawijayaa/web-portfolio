import { useState } from "react";

export default function RunningQuestionnaire() {
  const [nickname, setNickname] = useState("");
  const [everRunCFD, setEverRunCFD] = useState("");
  const [distance, setDistance] = useState("");
  const [pace, setPace] = useState("");
  const [activity, setActivity] = useState("");
  const [customActivity, setCustomActivity] = useState("");
  const [eatPlace, setEatPlace] = useState("");

  const sendWhatsApp = () => {
    const finalActivity = activity === "other" ? customActivity : activity;
    const message =
      `hi, kennn! ini aku ${nickname} hehehe%0A%0A` +
      `kalau minggu depan kamu free, ayo lari bareng lagi di hi, ${distance} km pace ${pace} aja%0A%0A` +
      `nahh abis lari kita ${finalActivity} yuk ke ${eatPlace}`;

    const waLink = `https://wa.me/6281314250902?text=${message}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className='flex flex-col items-center min-h-screen p-4 bg-gray-100'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>
          Running Questionnaire
        </h1>
        <div className='mt-8 space-y-4'>
          <label className='block text-gray-600'>Nickname</label>
          <input
            type='text'
            placeholder='Enter your nickname'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            Have you ever gone running before?
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
              Choose one
            </option>
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
          </select>

          <label className='pt-8 block text-gray-600'>
            How many kilometers do you usually run?
          </label>
          <input
            type='number'
            placeholder='Enter a number (e.g., 10)'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            What's your usual running pace?
          </label>
          <input
            type='text'
            placeholder='Enter your pace (e.g., 7:30)'
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={pace}
            onChange={(e) => setPace(e.target.value)}
          />

          <label className='pt-8 block text-gray-600'>
            What do you usually like to do after running?
          </label>
          <select
            className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option
              value=''
              disabled
            >
              Choose one
            </option>
            <option value='makan'>Eat</option>
            <option value='ngopi'>Grab coffee</option>
            <option value='jalan-jalan'>Take a walk</option>
            <option value='other'>Other (write it down)</option>
          </select>

          {activity === "other" && (
            <input
              type='text'
              placeholder='Enter other activity'
              className='w-full p-2 border rounded focus:ring-2 focus:ring-blue-400'
              value={customActivity}
              onChange={(e) => setCustomActivity(e.target.value)}
            />
          )}

          <label className='pt-8 block text-gray-600'>
            Where do you usually{" "}
            {activity === "other" ? customActivity : activity} after running?
          </label>
          <input
            type='text'
            placeholder='Enter your favorite place'
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
