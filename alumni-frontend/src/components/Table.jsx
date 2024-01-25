import React,{useState, useEffect} from 'react';
import { get_all_profiles, get_profiles_by_year } from "../controllers/StudentRoutes";

export default function Table(){
    const [profiles, setProfiles] = useState([]);
    const [profileYear, setProfileYear] = useState([]);
    const py = [], pd = [];

    useEffect(() => {
        get_all_profiles().then((data) => {
          console.log(data.Message);
          setProfiles(data.Message);
        })
    
        get_profiles_by_year().then((data) => {
          for(var i=0;i<data.Message.length;i++){
            py.push(data.Message[i][0]);
            pd.push(data.Message[i][1]);
          }
          console.log(pd);
          // console.log(py);
          setProfileYear(py);
          // setProfileData(pd);
          
          // setProfiles(data.Message);
        })
      }, []);
    return(
        <>
        {profileYear ?  profileYear.map((temp)=> (
            <>
            <div class="container mx-auto px-4 sm:px-8 font-opensans">
  <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold font-opensans">Alumni Directory - {temp}</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider"
              >
                Batch
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider"
              >
                Email Address
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider"
              >
                Branch
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
          {profiles.filter((profile)=> profile.batch == temp).map((check)=> (
            <>
             <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {check.name}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                <p class="text-gray-900 whitespace-no-wrap">{check.batch}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                <p class="text-gray-900 whitespace-no-wrap">{check.email}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                <p class="text-gray-900 whitespace-no-wrap">{check.branch}</p>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
              
            </>
          ))}
                

          
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            </>
        )): ('')}
       
        
            </>
       
    )
}