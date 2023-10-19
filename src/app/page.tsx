"use client";

import ProductCard from "@/components/card/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  IoArrowForwardCircleSharp,
  IoClose,
  IoPricetags,
  IoSparkles,
  IoUmbrella,
} from "react-icons/io5";

import { LuMoreHorizontal } from "react-icons/lu";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true);

  const closeBanner = () => {
    setIsOpen((prev) => prev == false);
  };

  return (
    <div className="flex flex-col items-start justify-start">
      {isOpen && (
        <span className="mb-12 w-full bg-zinc-50 border text-teal-500 rounded-lg items-center flex justify-start h-60 overflow-hidden relative">
          <Button
            variant="ghost"
            className="rounded-full text-black hover:bg-zinc-300 absolute top-0 right-0 m-4 z-20"
            size="icon"
            onClick={closeBanner}
          >
            <IoClose />
          </Button>
          <div className="w-1/2 h-full">
            <img
              src="https://igeekjo.com/cdn/shop/collections/components.png?v=1668352623"
              alt="components"
              className="w-full h-full object-none  z-0"
            />
          </div>
          <span className="flex flex-col items-start w-2/3 z-10 gap-1 p-12">
            <span className="flex gap-3">
              <h1 className="text-4xl font-bold">Welcome to</h1>
              <span className="flex items-center gap-2 font-bold text-4xl">
                <h1>FANG</h1>
                <IoUmbrella />
              </span>
            </span>
            <h2 className="font-medium text-xl text-zinc-800">
              here you find anything you <br />
              really want at a{" "}
              <strong className="font-semibold underline text-teal-500">
                cheap
              </strong>{" "}
              price! =)
            </h2>
          </span>
        </span>
      )}

      <section className="mb-12 w-full h-[450px]">
        <span className="font-bold text-xl gap-2 flex items-center">
          <IoSparkles />
          <h1>New products!</h1>
        </span>
        <div className="mt-6 gap-2 grid grid-cols-2 grid-rows-2 w-full h-full">
          <span className="col-span-1 row-span-full">
            <ProductCard
              new
              title={"Dell Latitude 5420"}
              desc={"Win10 - i7 10820U, 16GB, 256GB SSD, 14''..."}
              img={
                "https://d30u9wim1barf6.cloudfront.net/Custom/Content/Products/99/34/993434_notebook-dell-latitude-5420-14-hd-i5-1145g7-256gb-ssd-8gb-win10-pro-prata_z3_637623726498215995.jpg"
              }
              alt={"Dell Latitude 5420"}
              price={600}
            />
          </span>
          <span>
            <ProductCard
              new
              title={"Razer Viper V3 HyperSpeed"}
              desc={
                "Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle"
              }
              img={"https://cdn-cosmos.bluesoft.com.br/products/840272911228"}
              alt={"Razer Viper V3 HyperSpeed"}
              price={250}
              medium
            />
          </span>
          <span>
            <ProductCard
              new
              title={"LOGITECH G213 PRODIGY GAMING KEYBOARD"}
              desc={
                "Brilliant Color Spectrum Illumination Personalize five individual lighting zones from a spectrum of over 16.8 million colors..."
              }
              img={
                "https://themaczone.in/wp-content/uploads/2022/02/61Nt8geXzWL._SL1500_.jpg"
              }
              alt={"LOGITECH G213 PRODIGY GAMING KEYBOARD"}
              price={100}
              medium
            />
          </span>
        </div>
      </section>

      <section className="my-12 w-full p-8 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-2xl">
        <span className="flex items-center w-full justify-between">
          <span className="font-bold text-xl gap-2 flex items-center">
            <IoPricetags />
            <h1>Last Offers</h1>
            <h2 className="font-normal text-lg ml-2 opacity-90">
              ends in: 18:21:46
            </h2>
          </span>

          <Button variant="outline" className="gap-2">
            See more
            <IoArrowForwardCircleSharp />
          </Button>
        </span>
        <div className="flex w-full h-full mt-8 items-center gap-2 justify-center">
          <ProductCard
            title={"Razer Viper V3 HyperSpeed"}
            desc={
              "Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle"
            }
            img={"https://cdn-cosmos.bluesoft.com.br/products/840272911228"}
            alt={"Razer Viper V3 HyperSpeed"}
            price={250}
            small
          />
          <ProductCard
            title={"Razer Viper V3 HyperSpeed"}
            desc={
              "Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle"
            }
            img={"https://cdn-cosmos.bluesoft.com.br/products/840272911228"}
            alt={"Razer Viper V3 HyperSpeed"}
            price={250}
            small
          />
          <ProductCard
            title={"Razer Viper V3 HyperSpeed"}
            desc={
              "Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle"
            }
            img={"https://cdn-cosmos.bluesoft.com.br/products/840272911228"}
            alt={"Razer Viper V3 HyperSpeed"}
            price={250}
            small
          />
          <ProductCard
            title={"Razer Viper V3 HyperSpeed"}
            desc={
              "Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle"
            }
            img={"https://cdn-cosmos.bluesoft.com.br/products/840272911228"}
            alt={"Razer Viper V3 HyperSpeed"}
            price={250}
            small
          />
        </div>
      </section>
    </div>
  );
}
