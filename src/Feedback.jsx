import { useState,useRef } from "react";
import LOGO from "./assets/psy.png"
import ThankYou from "./ThankYou";
const Feedback = () => {
  const [result, setResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [language, setLanguage] = useState('EN');
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxK50XG-aaTdJtc_Z4G6zHFAPctFSKi90aMXnAqLi1c-OoGLJy_YbE7sjIp9y3M9LhNMA/exec"
  
  
 
const handleSubmit = (e) => {
  e.preventDefault();
setResult(true)
  if (isSubmitting) return; 
  setIsSubmitting(true); 
  
  fetch(scriptUrl, {
    method: 'POST',
    body: new FormData(formRef.current),
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    // alert("Your Feedback has been saved");
    setResult(true)
  })
  .catch(err => {
    console.error('Fetch error:', err);
    alert("There was an error saving your feedback.");
  })
  .finally(() => {
    setIsSubmitting(false); 
        e.target.reset();

  });
};



if (result) {
  return <ThankYou />;
}

const content = {
  EN: {
    customerName: "Customer Name",
    journeyDate: "Date of Journey",
    experience: "How was your overall journey experience?",
    experienceOptions: ["Excellent", "Good", "Satisfactory", "Poor"],
    vehicleCondition: "Rate the cleanliness and condition of the vehicle",
    punctuality: "Was the driver punctual in reporting at the specified time?",
    punctualityOptions: ["Yes, on time", "Slightly delayed", "Very late"],
    professionalism: "Rate the driver's professionalism and behavior",
    professionalismOptions: ["Excellent", "Good", "Satisfactory", "Poor"],
    messagePlaceholder: "Leave a message, if you want",
    submitText: "Submit Now"
  },
  JP: {
    customerName: "お客様のお名前",
    journeyDate: "ご利用日",
    experience: "全体的なご旅行体験はいかがでしたか？",
    experienceOptions: ["優れている", "良い", "満足", "悪い"],
    vehicleCondition: "車両の清潔さと状態を評価してください",
    punctuality: "指定された時間に運転手は時間通りに到着しましたか？",
    punctualityOptions: ["はい、時間通り", "やや遅れた", "大幅に遅れた"],
    professionalism: "運転手のプロフェッショナリズムと態度を評価してください",
    professionalismOptions: ["優れている", "良い", "満足", "悪い"],
    messagePlaceholder: "メッセージがあれば残してください",
    submitText: "今すぐ送信"
  }
};
  return (
    
  <>
  
 <div>
 <nav className="bg-gray-200 m-1 shadow-lg ">
   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
     <div className="relative flex h-16 items-center justify-between">
       
       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div className="flex flex-shrink-0 items-center">
           <img className="h-8 w-auto" src={LOGO} alt="Your Company"/>
         </div>
        
        <div >

        <label className="block text-sm font-medium text-gray-700 mb-2">Select Language:</label>
            <select
              className="rounded-md border-gray-300 p-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="EN">English</option>
              <option value="JP">日本語 (Japanese)</option>
            </select>
        </div>
       </div>
        </div>
   </div>
 
      </nav>
 
<div className="max-w-md  py-3 px-3 sm:mx-auto">
   <div className="flex flex-col rounded-xl bg-slate-200 shadow-2xl">
     
     <div className="px-12 py-5">
     <h2 className="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">
                {language === 'EN' ? "Your opinion matters to us!" : "あなたの意見は私たちにとって大切です!"}
              </h2>
     </div>
     <form  ref={formRef} name="Sheet1"  onSubmit={handleSubmit}>
     <div className="flex w-full flex-col items-center bg-[#fdfeff]">
       
       <div className="flex w-3/4 mt-6 flex-col">
       <div className="mb-5">
                    <label htmlFor="cname" className="block mb-2 text-sm font-medium text-gray-500">
                      {content[language].customerName} <span className="text-red-600">*</span>:
                    </label>
                    <input
                      type="text"
                      id="cname"
                      name="Customer Name"
                      className="rounded-xl bg-gray-100 p-4 w-full text-gray-500 outline-none focus:ring"
                      placeholder={language === 'EN' ? "Customer Name" : "フルネームを入力してください"}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="doj" className="block mb-2 text-sm font-medium text-gray-500">
                      {content[language].journeyDate} <span className="text-red-600">*</span>:
                    </label>
                    <input
                      type="date"
                      id="doj"
                      name="Date Of Journey"
                      className="rounded-xl bg-gray-100 p-4 w-full text-gray-500 outline-none focus:ring"
                      required
                    />
                  </div>
         
            
<ul className="list-decimal">
<li>
   <fieldset>                    
       <p className="mt-1 text-sm leading-6 text-gray-600 "> {content[language].experience}<span className="text-red-600 ">*</span></p>
                           <div className="mt-6 space-y-6">
                           {content[language].experienceOptions.map((option) => (
                        <div className="flex items-center gap-x-3" key={option}>
                          <input
                            id={`experience-${option}`}
                            name="Overall Journey Experience"
                            type="radio"
                            value={option}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={`experience-${option}`} className="block text-sm font-medium leading-6 text-gray-900">
                            {option}
                          </label>
                        </div>
                      ))}
                           </div>
                         </fieldset>
</li>

<li>
<fieldset>                    
   <p className="mt-1 text-sm leading-6 text-gray-600 ">  {content[language].vehicleCondition} <span className="text-red-600 ">*</span>:</p>
   <div className="mt-6 space-y-6">
                      {content[language].experienceOptions.map((option) => (
                        <div className="flex items-center gap-x-3" key={option}>
                          <input
                            id={`vehicle-${option}`}
                            name="Vehicle Condition"
                            type="radio"
                            value={option}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={`vehicle-${option}`} className="block text-sm font-medium leading-6 text-gray-900">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                     </fieldset>
</li>


<li>
<fieldset>                    
   <p className="mt-1 text-sm leading-6 text-gray-600 "> {content[language].punctuality}<span className="text-red-600 ">*</span></p>
   <div className="mt-6 space-y-6">
                      {content[language].punctualityOptions.map((option) => (
                        <div className="flex items-center gap-x-3" key={option}>
                          <input
                            id={`punctuality-${option}`}
                            name="Driver Punctuality"
                            type="radio"
                            value={option}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={`punctuality-${option}`} className="block text-sm font-medium leading-6 text-gray-900">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                     </fieldset>
</li>


<li>
<fieldset>                    
   <p className="mt-1 text-sm leading-6 text-gray-600 ">{content[language].professionalism} <span className="text-red-600 ">*</span>:</p>
   <div className="mt-6 space-y-6">
                      {content[language].professionalismOptions.map((option) => (
                        <div className="flex items-center gap-x-3" key={option}>
                          <input
                            id={`professionalism-${option}`}
                            name="Driver Professionalism"
                            type="radio"
                            value={option}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor={`professionalism-${option}`} className="block text-sm font-medium leading-6 text-gray-900">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                     </fieldset>
</li>


<li>
<fieldset>                    
   <p className="mt-1 text-sm leading-6 text-gray-600 ">
   {language === 'EN' ? "Additional Comments (Optional)" : "追加のコメント（任意）"}
    <span className="text-red-600 ">*</span></p>
   <textarea rows="3" name="Experience" className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 w-full outline-none focus:ring"  placeholder={content[language].messagePlaceholder}
   ></textarea>          
                     </fieldset>
</li>

</ul>


            
<input
                    type="submit"
                    className="my-8 shadow-full shadow-black hover:bg-white cursor-pointer rounded-xl bg-gradient-to-r text-center from-purple-500 to-indigo-600 py-3 text-base text-white transition-all duration-500"
                    value={language === "EN" ? "Submit Now" : "今すぐ送信"}
                  />
       </div>
     </div>
   </form>

     <div className="flex items-center justify-center py-5">
       <p className="text-sm text-gray-600"></p>
       <div className="form-group">
                {result ? <ThankYou  language={language} /> : null}
            </div> 
     </div>
   </div>
 </div>   

</div>


    </>
  )
}

export default Feedback