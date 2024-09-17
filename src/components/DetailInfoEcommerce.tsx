import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export default function DetailInfoEcommerce() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 gap-14">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-3xl">Louis Vuitton</h1>
          <p className="text-sm text-gray-400 w-1/2">
            Louis Vuitton is renowned as one of the worlds most prestigious
            luxury brands, offering high-quality products with elegant designs
            and unmatched craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=490 490w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=600 600w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=730 730w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=1090 1090w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=1180 1180w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=1300 1300w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=1440 1440w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=2400 2400w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=4096 4096w"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Services</h1>
              <Link href="/products">
                <p className="underline text-sm">Contact Us</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=490 490w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=600 600w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=730 730w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=1090 1090w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=1180 1180w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=1300 1300w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=1440 1440w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=2400 2400w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=4096 4096w"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Art of Gifting</h1>
              <Link href="/products">
                <p className="underline text-sm">Gift for You</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=490 490w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=600 600w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=730 730w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=1090 1090w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=1180 1180w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=1300 1300w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=1440 1440w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=2400 2400w, https://id.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=4096 4096w"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Personalization</h1>
              <Link href="/products">
                <p className="underline text-sm">Explore</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
