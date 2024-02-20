// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/IciKJUPvvIs
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
//
// export default function Component() {
//   return (
//     <div className="max-w-sm mx-auto my-10 p-6 border rounded-lg">
//       <div className="flex flex-col space-y-4">
//         <div className="text-center">
//           <h2 className="text-lg font-semibold">
//             Want to see all full key ideas from The 5 AM Club?
//           </h2>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="w-5 h-5 mx-auto mt-2"
//           >
//             <path d="m6 9 6 6 6-6"></path>
//           </svg>
//         </div>
//         <input
//           type="email"
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           placeholder="Email address"
//         />
//         <div className="flex justify-between">
//           <input
//             type="password"
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             placeholder="Create password"
//           />
//           <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-2">
//             Show
//           </button>
//         </div>
//         <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-green-500 hover:bg-green-600">
//           Create account
//         </button>
//         <div className="flex items-center">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="px-4 text-sm text-gray-500">or</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>
//         <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="w-4 h-4 mr-2"
//           >
//             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//           </svg>
//           Sign up with Facebook
//         </button>
//         <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="w-4 h-4 mr-2"
//           >
//             <circle cx="12" cy="12" r="10"></circle>
//             <circle cx="12" cy="12" r="4"></circle>
//             <line x1="21.17" x2="12" y1="8" y2="8"></line>
//             <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
//             <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
//           </svg>
//           Sign up with Google
//         </button>
//         <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-gray-800 hover:bg-gray-900">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="w-4 h-4 mr-2"
//           >
//             <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
//             <path d="M10 2c1 .5 2 2 2 5"></path>
//           </svg>
//           Continue with Apple
//         </button>
//         <div className="text-center text-sm">
//           <p>
//             Our{" "}
//             <a className="text-blue-600" href="#" rel="ugc">
//               Terms of Service
//             </a>{" "}
//             apply. For more info on our data processing, see our{" "}
//             <a className="text-blue-600" href="#" rel="ugc">
//               Privacy Policy
//             </a>
//             .
//           </p>
//         </div>
//         <div className="text-center">
//           <a className="text-blue-600" href="#" rel="ugc">
//             Already have an account?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// function AppleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
//       <path d="M10 2c1 .5 2 2 2 5" />
//     </svg>
//   );
// }
