import React from 'react'
import emily from '../../images/image-emily.jpg'
import jennie from '../../images/image-jennie.jpg'
import thomas from '../../images/image-thomas.jpg'
 
const Main = () => {
  return (
    <main className="h-auto min-w-[375px]">
      <div id='brandinfo' className='grid grid-flow-row auto-rows-max md:grid-cols-2 h-auto w-auto bg-primary-off-white'>
        <div className="md:bg-transformdesktop aspect-[6/5] bg-no-repeat bg-cover bg-transformmobile bg-center place-self-stretch"></div>
        <div className="text-center grid place-self-center my-16 mx-8 md:ml-32 md:mr-16 md:my-12 md:text-left md:col-start-1 md:row-start-1">
          <h2 className="font-fraunces font-black text-black/80 text-4xl md:text-responsive">Transform your brand</h2>
          <p className="font-barlow py-6 md:py-8 text-black/50 text-paragraph">
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <div className="place-self-center w-max group md:place-self-start md:translate-x-2">
            <div className="translate-y-[25px] -translate-x-2 w-[calc(100%+16px)] h-[10px] rounded-full bg-primary-yellow/40 group-hover:bg-primary-yellow/70" />
            <a href="#ratings" className="font-fraunces text-base relative">LEARN MORE</a>
          </div>
        </div>
        <div className='bg-standoutmobile md:bg-standoutdesktop aspect-[6/5] bg-no-repeat bg-cover bg-center place-self-stretch'></div>
        <div className="text-center grid place-self-center my-16 mx-8 md:mr-32 md:ml-16 md:my-12 md:text-left">
          <h2 className="font-fraunces font-black text-black/80 text-4xl md:text-responsive">Stand out to the right audience</h2>
          <p className="font-barlow py-6 md:py-8 text-black/50 text-paragraph">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
          <div className="place-self-center w-max group md:place-self-start md:translate-x-2">
            <div className="translate-y-[25px] -translate-x-2 w-[calc(100%+16px)] h-[10px] rounded-full bg-primary-soft-red/30 group-hover:bg-primary-soft-red/70" />
            <a href="#ratings" className="font-fraunces text-base relative">LEARN MORE</a>
          </div>
        </div>
        <div className="grid bg-graphicdesignmobile md:bg-graphicdesigndesktop aspect-[5/8] md:aspect-[6/5] bg-cover bg-no-repeat bg-center place-self-stretch">
          <div className='text-center mx-8 mb-12 xl:mx-28 md:mx-6 place-self-end'>
            <h2 className="font-fraunces font-black text-primary-dark-desaturated-cyan text-4xl md:text-headingsmall">Graphic design</h2>
            <p className="font-barlow pt-4 xl:px-12 md:px-0 tracking-tighter text-primary-dark-desaturated-cyan text-paragraph">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </p>
          </div>
        </div>
        <div className="grid bg-photographymobile md:bg-photographydesktop aspect-[5/8] md:aspect-[6/5] bg-cover bg-no-repeat bg-center place-self-stretch">
          <div className='text-center mx-8 mb-12 xl:mx-28 md:mx-6 place-self-end'>
            <h2 className="font-fraunces font-black text-primary-dark-blue text-4xl md:text-headingsmall">Photography</h2>
            <p className="font-barlow pt-4 xl:px-12 md:px-0 tracking-tighter text-primary-dark-blue text-paragraph">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </p>
          </div>
        </div>
      </div>

      <div id='ratings' className='h-auto bg-primary-off-white flex flex-col items-center py-20 md:py-60 md:px-44 space-y-14 md:space-y-20 '>
        <h2 className="font-fraunces font-black text-lg md:text-xl text-neutral-grayish-blue md:tracking-[0.5rem] tracking-[0.3rem]">CLIENT TESTIMONIALS</h2>
        <div className="cards flex flex-col md:flex-row space-y-20 md:space-x-2 md:space-y-0">
          <article className="flex flex-col justify-center text-center">
            <img src={emily} alt="user dp" className="rounded-full h-20 w-20 self-center" />
            <p className="font-barlow tracking-tight text-xl text-neutral-very-dark-desaturated-blue opacity-80 px-10 my-10 md:my-16">
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </p>
            <h3 className="font-fraunces font-black text-neutral-very-dark-desaturated-blue text-lg">
              Emily R.
            </h3>
            <h4 className="font-barlow text-sm font-semibold opacity-40 pt-2">
              Marketing Director
            </h4>
          </article>
          <article className="flex flex-col justify-center text-center">
            <img src={thomas} alt="user dp" className="rounded-full h-20 w-20 self-center" />
            <p className="font-barlow tracking-tight text-xl text-neutral-very-dark-desaturated-blue opacity-80 px-10 my-10 md:my-16">
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h3 className="font-fraunces font-black text-neutral-very-dark-desaturated-blue text-lg">
              Thomas S.
            </h3>
            <h4 className="font-barlow text-sm font-semibold opacity-40 pt-2">
              Chief Operating Officer
            </h4>
          </article>
          <article className="flex flex-col justify-center text-center">
            <img src={jennie} alt="user dp" className="rounded-full h-20 w-20 self-center" />
            <p className="font-barlow tracking-tight text-xl text-neutral-very-dark-desaturated-blue opacity-80 px-10 my-10 md:my-16">
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <h3 className="font-fraunces font-black text-neutral-very-dark-desaturated-blue text-lg">
              Jennie F.
            </h3>
            <h4 className="font-barlow text-sm font-semibold opacity-40 pt-2">
              Business Owner
            </h4>
          </article>


        </div>
      </div>

      <div id='gallary' className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1'>
        <div className=" bg-milkbottlesmobile md:bg-milkbottledesktop aspect-square bg-center bg-cover place-self-stretch"/>
        <div className=" bg-orangemobile md:bg-orangedesktop aspect-square bg-center bg-cover place-self-stretch"/>
        <div className=" bg-conemobile md:bg-conedesktop aspect-square bg-center bg-cover place-self-stretch"/>
        <div className=" bg-sugarcubemobile md:bg-sugarcubedesktop aspect-square bg-center bg-cover place-self-stretch"/>
      </div>
    </main>
  )
}

export default Main