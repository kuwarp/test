const ThankYou = ({ language }) => {
    const content = {
      EN: {
        heading: "Thank You!",
        message: "Thank you for your interest! Your feedback has been saved.",
      },
      JP: {
        heading: "ありがとうございます！",
        message: "ご意見ありがとうございます！フィードバックが保存されました。",
      }
    };
  
    return (
      <>
        <div className="flex h-screen items-center justify-center">
          <div>
            <div className="flex flex-col items-center space-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-4xl font-bold">{content[language].heading}</h1>
              <p className='text-center text-wrap text-sm lg:text-xl'>
                {content[language].message}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ThankYou;
  