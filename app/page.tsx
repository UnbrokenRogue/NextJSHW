
//export default function Page() {
  //return <h1>Howdy!</h1>
//}

 "use client"
 import CountButton from "./CountButton"
 import SearchBar from "./SearchBar/SearchBar"
 export default function Page() {
     return (
     <div>
    
     <CountButton 
     incrementval = {1}
     //name = {"eric"}
     color = {"Pink"}
     />

     <CountButton 
     incrementval = {2}
     //name = {"john"}
     color = {"BlanchedAlmond"}
     />
     {/* <CountButton /> */}

     <hr />
     <a href="https://github.com/UnbrokenRogue/NextJSHW.git">Link to my github</a>
     <hr />
     <SearchBar></SearchBar>
     </div>
     )
   }

 //   export default function Page() {
 //     // return <h1>Hello, Next.js!</h1>
 //     return <CountButton />
 //   }
