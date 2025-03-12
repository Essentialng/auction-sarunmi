import Link from "next/link"

export default function PopUp({details}){

    return(
      <div className="w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 fixed z-50">
  <div className="bg-purple-100 rounded-lg shadow-lg p-8 max-w-lg text-center">
    <div className="flex justify-center mb-4">
      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{details?.header}</h2>
    <p className="text-gray-700 mb-6">{details?.texts}</p>
    <p className="text-gray-700 mb-6">{details?.texts2}</p>
    <div className="flex justify-center gap-12 items-center">
      {details.link &&
      <Link href = {details?.link} className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-200">
        {details?.btn}
      </Link>
      }
      <Link href={details?.link2} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
        {details?.btn2}
      </Link>
    </div>
  </div>
</div>
    )
}