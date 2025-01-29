export default function Notification(){
    return(
        <main className=" bg-white flex flex-col gap-8 h-full">
          <section className="mb-4 px-6 py-6 bg-[#FFFFFF] h-2/3 shadow-xl border rounded-2xl overflow-hidden">
            <h2 className="text-2xl font-bold pb-2">Notification</h2>
            <hr className="outline-slate-400 border-y-2"/>
            <div className=" rounded-lg py-4 h-full">
              <ul className="space-y-6 h-full overflow-y-scroll">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>🔔</span>
                    <p>The auction has ended, and you've won <strong>Bungalow</strong>! Get ready to claim it.</p>
                  </div>
                  <span>22nd May 2024</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>🔔</span>
                    <p>Another user has outbid you on <strong>vehicle BMW</strong>. Place a higher bid now to stay in the lead!</p>
                  </div>
                  <span>19th May 2024</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>🔔</span>
                    <p>Congratulations! Your product has sold out to the highest bidder.</p>
                  </div>
                  <span>17th May 2024</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>🔔</span>
                    <p>Thank you for verifying your account.</p>
                  </div>
                  <span>15th May 2024</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Notification Setting */}
          <section>
            <h2 className="text-xl font-bold text-[#EF6509]">Notification Setting</h2>
            
            <div className="mt-4 p-4 rounded-lg flex items-center justify-between shadow-xl">
              <p>Turn on notifications to receive bid updates via email or SMS.</p>
              <button className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 focus:outline-none">
                <span className="inline-block w-4 h-4 transform bg-white rounded-full"></span>
              </button>
            </div>
          </section>
        </main>
    )
}