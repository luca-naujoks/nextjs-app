export function CircularProgressBar() {
    return (
        <ol className="relative border-s-2 border-gray-200">
            <li className="flex items-center mb-16 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-purple-300 rounded-full -start-4 ring-4 ring-white">
            <svg className="w-3.5 h-3.5 text-purple-500" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
                <h3 className="font-medium leading-tight">Secondary school certificate</h3>
            </li>
            <li className="flex items-center mb-16 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-purple-300 rounded-full -start-4 ring-4 ring-white">
            <svg className="w-3.5 h-3.5 text-purple-500" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
                <h3 className="font-medium leading-tight">Training as an IT specialist for system integration</h3>
            </li>

            <li className="flex items-center mb-16 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-b from-purple-200 from-50% to-gray-200 to-100% rounded-full -start-4 ring-4 ring-white">
            <svg className="w-6 h-6" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.64 6 2s-2.13 2-6 2-6-1.64-6-2 2.13-2 6-2zm0 16c-3.87 0-6-1.64-6-2v-2c1.25 1.33 3.75 2 6 2s4.75-.67 6-2v2c0 .36-2.13 2-6 2zm0-4c-3.87 0-6-1.64-6-2v-2c1.25 1.33 3.75 2 6 2s4.75-.67 6-2v2c0 .36-2.13 2-6 2zm0-4c-3.87 0-6-1.64-6-2V8c1.25 1.33 3.75 2 6 2s4.75-.67 6-2v2c0 .36-2.13 2-6 2z"/>
        </svg>
        </span>
                <h3 className="font-medium leading-tight">Lotus Notes to SharePoint Online Migration</h3>
            </li>
            <li className="flex items-center mb-16 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
            <svg className="w-3.5 h-3.5 text-gray-5000" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
                <h3 className="font-medium leading-tight">Future Projects</h3>
            </li>
        </ol>

    )
}