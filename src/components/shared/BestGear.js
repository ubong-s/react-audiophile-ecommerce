const BestGear = () => {
   return (
      <div>
         <div className='container'>
            <div className='image'>
               <img
                  src='/assets/shared/mobile/image-best-gear.jpg'
                  alt='Best Gear'
                  className='mobile'
               />
               <img
                  src='/assets/shared/tablet/image-best-gear.jpg'
                  alt='Best Gear'
                  className='tablet'
               />
               <img
                  src='/assets/shared/desktop/image-best-gear.jpg'
                  alt='Best Gear'
                  className='desktop'
               />
            </div>
            <div>
               <h2>
                  Bringing you the <span>best</span> audio gear
               </h2>
               <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
               </p>
            </div>
         </div>
      </div>
   );
};

export default BestGear;
