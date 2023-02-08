import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   const [numChannels, setNumChannels] = useState(16);
   const [channelIds, setChannelIds] = useState([
      "XEJM4Hcgd3M", //NTV
      "SqHIO2zhxbA", //HT
      "hHSmBJk6w0c", //Blom
      "Rc5qrxlJZzc", //TRT
      "fx5_pi-1Zqo", //hbrglobal
      "sd94keSra6A", //TV100
      "8YPC2IV7ve0", //TGRT
      "mRK3wXGdsLk", //TELE1
      "7su_1By-cBk", //BNGUTV
      "SdCJquYL-CQ", //ULUSAL
      "lxGVhhq2jV0", //CNN
      "TPbdeNMaAZY", //k24
      "SR396EBvGUk", //TVNET
      "1-Ng6S1dhNI", //ULKE
      "3QDiWPZ2D_k", //KRT
      "L0aI7O5KrVU", //Hlktv
   ]);

   const handleSettingsChange = (num) => {
      setNumChannels(num);
   };

   const generateIframes = () => {
      let iframes = [];
      for (let i = 0; i < numChannels; i++) {
         iframes.push(
            <div
               key={i}
               className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center p-0"
               style={{ marginBottom: "0px" }}>
               <iframe
                  className="d-grid"
                  src={`https://www.youtube.com/embed/${channelIds[i]}?autoplay=1&mute=1`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               />
            </div>
         );
      }
      return iframes;
   };

   return (
      <div className="text-bg-dark bg-dark">
         <div className="msk-container">
            <div className="row justify-content-around align-items-center m-0">
               {generateIframes()}
            </div>
         </div>
      </div>
   );
}

export default App;
