export default function Home() {
  return <h1 className="title text-2xl">Home Page</h1>;
}

// "use client";

// import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Document</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <div className="main-container">
//         <div className="main-container-text">
//           <h1 className="inter-fonts">
//             We are <br />
//             looking for
//             <br />
//             Achmad Handsome!
//           </h1>
//           <h2 className="inter-fonts">Welcome to ARK .COM!</h2>
//         </div>
//       </div>
//       <style jsx>{`
//         .inter-fonts {
//           font-family: "Inter", sans-serif;
//           font-optical-sizing: auto;
//           font-style: normal;
//         }
//         body {
//           background: radial-gradient(to center, black, white);
//           animation: changeBackgroundColor 10s ease-in-out infinite;
//         }
//         @keyframes changeBackgroundColor {
//           0% {
//             background-color: #ffca00;
//           }
//           25% {
//             background-color: #bdff00;
//           }
//           50% {
//             background-color: #3de9f4;
//           }
//           75% {
//             background-color: #d185ff;
//           }
//           90% {
//             background-color: #f39200;
//           }
//           100% {
//             background-color: #ffca00;
//           }
//         }
//         .main-container {
//           padding: 60px 185px 0 140px;
//         }
//         .main-container-text {
//           display: flex;
//           justify-content: space-between;
//         }
//         h1 {
//           font-size: 74px;
//           font-weight: 900;
//         }
//         h2 {
//           font-size: 24px;
//           font-weight: 600;
//         }
//       `}</style>
//     </>
//   );
// }
