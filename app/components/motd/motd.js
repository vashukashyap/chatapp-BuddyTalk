import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";



const Motd = () => {

  const router = useRouter()

  const handleRoute = () => {
    router.push('/signup');
}


    return(
        <section className="bg-center h-[100vh] bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-900 bg-blend-multiply ">
  <div className="md:px-4 mx-auto max-w-screen-xl text-center pt-40 lg:py-56">
    <h1 className="mb-4 flex justify-center items-center gap-1 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 64 64">
<path fill="#72caaf" d="M54,26.19c0,11.61-11.86,21-26.5,21a32.68,32.68,0,0,1-6.09-.57c-1.19,2.18-4.27,5.61-10.36,7a20.77,20.77,0,0,0,2.73-9.43C6.12,40.49,1,33.81,1,26.19,1,17.35,7.87,9.79,17.61,6.68A32.67,32.67,0,0,1,27.5,5.17C37.94,5.17,47,10,51.28,16.91A17.39,17.39,0,0,1,54,26.19Z"></path><path fill="#97e0bb" d="M48.34,18.12h0a2.51,2.51,0,0,1-2.84-.7c-3.84-4.37-10.47-7.26-18-7.26a28.31,28.31,0,0,0-5.8.59A2.47,2.47,0,0,1,19,9.44l0,0a2.49,2.49,0,0,1,1.73-3.53,33.16,33.16,0,0,1,6.81-.7c9,0,17,3.56,21.74,9A2.49,2.49,0,0,1,48.34,18.12Z"></path><path fill="#faefde" d="M63,41.24c0-8.32-8.51-15.07-19-15.07S25,32.92,25,41.24s8.51,15.07,19,15.07a23.8,23.8,0,0,0,4.37-.4c.85,1.56,3.06,4,7.43,5a14.9,14.9,0,0,1-2-6.76C59.33,51.49,63,46.71,63,41.24Z"></path><path fill="#fff7f0" d="M62.24,37l-1.41.5a2.91,2.91,0,0,1-3.39-1.19c-2.1-3.12-6.13-5.41-10.94-6A2.85,2.85,0,0,1,44,27.49V26.17C52.64,26.17,59.94,30.75,62.24,37Z"></path><path fill="#efd8be" d="M25,41.71l1.47-.26a2.91,2.91,0,0,1,3.14,1.74c1.54,3.43,5.13,6.37,9.76,7.77a2.85,2.85,0,0,1,2,3.21l-.22,1.3C32.62,54,26.2,48.28,25,41.71Z"></path><path fill="#8d6c9f" d="M11 32.43L9.54 33.82a1 1 0 1 0 1.39 1.44l1.44-1.39A1 1 0 1 0 11 32.43zM16.48 35.7a1 1 0 0 0-1.37.34l-1 1.71a1 1 0 0 0 1.71 1l1-1.71A1 1 0 0 0 16.48 35.7zM21.27 37.78a1 1 0 0 0-1.24.69l-.55 1.92a1 1 0 0 0 1.92.55L22 39A1 1 0 0 0 21.27 37.78z"></path><path fill="#8d6c9f" d="M64,41.24c0-5.63-3.62-10.59-9.08-13.46A13.88,13.88,0,0,0,55,26.19c0-12.14-12.34-22-27.5-22S0,14.05,0,26.19C0,33.8,4.75,40.71,12.74,44.77a19.37,19.37,0,0,1-2.55,8.32,1,1,0,0,0,0,1.1,1,1,0,0,0,.81.41.82.82,0,0,0,.22,0c6.42-1.43,9.49-5.06,10.64-6.83a34.36,34.36,0,0,0,4,.42c3.23,5.4,10.11,9.14,18,9.14A24,24,0,0,0,47.87,57a12.2,12.2,0,0,0,7.71,4.87.76.76,0,0,0,.21,0,1,1,0,0,0,.86-1.52,13.84,13.84,0,0,1-1.77-5.65C60.61,51.75,64,46.75,64,41.24ZM21.59,45.66a1,1,0,0,0-1.06.5A13.39,13.39,0,0,1,13,52a22.29,22.29,0,0,0,1.78-7.8,1,1,0,0,0-.56-.95C6.56,39.59,2,33.21,2,26.19c0-11,11.44-20,25.5-20s25.5,9,25.5,20c0,.23,0,.47,0,.7a23.82,23.82,0,0,0-9-1.72c-11,0-20,7.21-20,16.07a13.1,13.1,0,0,0,.94,4.86C23.82,46,22.7,45.86,21.59,45.66Zm31.82,7.57a1,1,0,0,0-.57.95,16.68,16.68,0,0,0,1,5.08,9.12,9.12,0,0,1-4.65-3.84,1,1,0,0,0-.87-.51h-.19a22.58,22.58,0,0,1-4.18.39c-6.7,0-12.55-2.87-15.64-7.12a11.57,11.57,0,0,1-1.2-2,11.26,11.26,0,0,1-1.16-5c0-7.76,8.07-14.07,18-14.07a22,22,0,0,1,8.76,1.78,19.78,19.78,0,0,1,1.84.93c4.49,2.56,7.4,6.7,7.4,11.36C62,46.16,58.79,50.64,53.41,53.23Z"></path><path fill="#8d6c9f" d="M38 36A2 2 0 1 0 38 40 2 2 0 1 0 38 36zM50 36A2 2 0 1 0 50 40 2 2 0 1 0 50 36zM18 19A2 2 0 1 0 18 23 2 2 0 1 0 18 19zM36 19A2 2 0 1 0 36 23 2 2 0 1 0 36 19zM25.4 10.94c.69-.06 1.4-.1 2.1-.1a24.37 24.37 0 0 1 10.27 2.07 1 1 0 0 0 .82-1.83 27 27 0 0 0-11.1-2.25c-.76 0-1.52 0-2.26.11a1 1 0 1 0 .18 2zM42.93 16.2a1 1 0 0 0 1.33-1.5 20.83 20.83 0 0 0-1.7-1.35A1 1 0 0 0 41.4 15 18.58 18.58 0 0 1 42.93 16.2zM38.33 49.33A11.58 11.58 0 0 1 32 44.5a1 1 0 0 0-1.73 1 13.56 13.56 0 0 0 7.44 5.73 1 1 0 1 0 .66-1.89z"></path>
</svg>
      Buddy Talk
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Get Close to you friends, and have fun with them.
    </p>
    <div className="flex flex-col mx-auto space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 sm:space-x-4">
      <a
        onClick={handleRoute}
        className="inline-flex  justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get started
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

    );
}


export default Motd