// import React, { useState } from "react";
// import Header from "../components/Header";
// import Navigation from "../components/Navigation";
// import Select from "../components/Select";
// import WarningCard from "../components/WarningCard";
// import Button from "../components/Button";
// import NavButton from "../components/NavButton";
// import styled from "styled-components";
// import DownloadIcon from "../icons/downloadIcon";
// import html2canvas from "html2canvas";

// const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `;

// const languages = [
//   "english",
//   "german",
//   "french",
//   "spanish",
//   "italian",
//   "russian",
//   "thai",
//   "swedish"
// ];
// const CardContainer = styled.div`
//   height: 80vh;
//   width: 100vw;
//   position: relative;
// `;

// export default function Card({ props }) {
//   const allergyData = props.location.state.data;
//   const
//   return (
//     <>
//       <Header />
//       <Navigation selected="0" />
//       <Select allergyData={allergyData} select={handleSelect} />
//       <CardContainer id="divToPrint" key={allergyFilterSelection}>
//         {allergyFilterSelection && allergyData && languageFilterSelection && (
//           <WarningCard
//             src={allergyData[allergy].images.warning}
//             alt={`no ${allergy}`}
//             text={allergyData[allergy].languages[language]}
//           />
//         )}
//       </CardContainer>
//       <ButtonContainer>
//         <Button
//           id="download"
//           onEvent={() => {
//             html2canvas(document.querySelector("#divToPrint")).then(function(
//               canvas
//             ) {
//               console.log(canvas);
//               saveAs(canvas.toDataURL(), "file-name.png");
//             });
//           }}
//         >
//           <DownloadIcon />
//           Download
//         </Button>
//         <NavButton path="/change" name="change" />
//       </ButtonContainer>
//     </>
//   );
// }
// function saveAs(uri, filename) {
//   const link = document.createElement("a");

//   if (typeof link.download === "string") {
//     link.href = uri;
//     link.download = filename;

//     //Firefox requires the link to be in the body
//     document.body.appendChild(link);

//     //simulate click
//     link.click();

//     //remove the link when done
//     document.body.removeChild(link);
//   } else {
//     window.open(uri);
//   }
// }
