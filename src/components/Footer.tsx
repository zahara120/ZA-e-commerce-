export default function Footer() {
  return (
    <>
      <footer>
        <div className="px-10 py-10 border-t border-gray-300">
          <div className="grid grid-cols-4 gap-10 justify-items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-xs">HELP</h1>
              <p className="text-[10px]">
                Client Services is available from 9am – 7pm at 0800 1400 800 .
                You can also email us.
              </p>
              <p className="text-[10px]">FAQ</p>
              <p className="text-[10px]">Product Care</p>
              <p className="text-[10px]">Stores</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xs">SERVICES</h1>
              <p className="text-[10px]">Repairs</p>
              <p className="text-[10px]">Personalization</p>
              <p className="text-[10px]">Art of Gifting</p>
              <p className="text-[10px]">Download our Apps</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xs">ABOUT LOUIS VUITTON</h1>
              <p className="text-[10px]">Fashion Show</p>
              <p className="text-[10px]">Art & Culture</p>
              <p className="text-[10px]">La Maison</p>
              <p className="text-[10px]">Sustainability</p>
              <p className="text-[10px]">Latest News</p>
              <p className="text-[10px]">Careers</p>
              <p className="text-[10px]">Foundation Louis Vuitton</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xs">CONNECT</h1>
              <p className="text-[10px]">
                <span className="underline">Sign up</span> for Louis Vuitton
                emails and receive the latest news from the Maison, including
                exclusive online pre-launches and new collections.
              </p>
              <p className="text-[10px]">Follow Us</p>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 border-t border-gray-300">
          <div className="flex items-center justify-between">
            <p className="text-[10px]">© 2022 Louis Vuitton</p>
            <div className="flex items-center gap-5">
              <p className="text-[10px]">Sitemap</p>
              <p className="text-[10px]">Legal & Privacy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
