import { Rings } from 'react-loading-icons';
import classNames from 'classnames';
import { axiosInstance } from '@/package/axios';
import { Toast } from "@/package/alert";
import { useState } from 'react';

export function AccountDetails({card, user, setEdit, index, setFormValue, setEmailVerified}){

    const toggleHandler = (index)=>{
        setEdit(index);
        setFormValue({id: user?.id });
        setEmailVerified("");
    };

    return(
    <div className="  relative flex flex-col justify-end items-end py-8">
        <div className="flex items-center mb-4 w-full">
            <div className="mr-4 text-4xl text-orange-600 flex flex-col">
            {card.icon}
            </div>
            {card.firstValue ?
            <div>
                <p>{user?.[card.firstValue]} {user?.[card.lastValue]}</p>
                <p className="text-gray-500">{user?.[card.extraValue]}</p>
                <p className="text-gray-500">{user?.[card.stateValue]}</p>
            </div>
            :
            <div>
                <p>{card.text}</p>
                <p>{card.text2}</p>
            </div>
            }

        </div>
        <div className="flex items-center justify-end gap-4  w-full">
            {card.button2 &&
            <button  className="border-orange-600 border bg-white text-orange-600 px-4 py-2 rounded">
                {card.button2}
            </button>
            }
            <button 
            onClick={()=>toggleHandler(index)}
            className="bg-orange-600 text-white px-4 py-2 rounded">
                {card.button}
            </button>
        </div>
    </div>
    )
}


export function AccountDetailsForm({
    user, 
    card, 
    formHandler, 
    formValue,
    submit,
    profilePricture,
    imageSrc,
    loading,
    setEmailVerified
}){


     const sendEmail =async ()=>{
        try{
          
        const response = await axiosInstance.post("sendEmail", {email : user?.email});
    
        const data = await response.data
    
        if(response.status == 201){
          
          Toast.fire({
            icon: "success",
            title: "Verification code sent!",
          });
          setEmailVerified(data.verifyCode)
        }
        
        }catch(error){
          Toast.fire({
            icon: "error",
            title: "Connect to a strong network",
    
          });
        }
      };



      
    return(
        <div className="w-full py-4 flex flex-col gap-4 items-end justify-end px-12">
            {card.map((form, index)=>{
                
                const formType = form.type == "file"
                const onChangehandler = formType ? profilePricture : formHandler

                return(
                <div key={index} className="flex flex-col gap-2 w-full">
                    <label>{form.label}</label>
                    <input 
                    className="border p-3 rounded-lg"
                    type={form.type} 
                    name={form.name}
                    onChange={onChangehandler}
                    value={formType ? "" : formValue?.[form.name]}
                    disabled={form.disable}
                    placeholder={
                        form.name == "firstName" ?
                        user?.firstName : 
                        form?.name == "lastName" 
                        ? user?.lastName :
                        form?.name == "phoneNumber" ? 
                        user?.phoneNumber :
                        form?.name == "email" ? 
                        user?.email :
                        form.placeholder} 
                        />

                    {form.code &&    
                    <small>{form.code}</small>
                    }

                    {formType &&
                    <small>{imageSrc}</small>
                    }

                    {form.button &&
                    <button 
                    onClick={sendEmail}
                    className='bg-black text-white'>{form.button}</button>
                    }
                </div>
            )
            
            })}
            <button
             onClick={submit}
            className={classNames({
                " px-4 py-2 rounded" : true,
                "bg-orange-600 text-white " : !loading,
                "bg-[#C6CBC7] text-[#979998]" : loading
            })}
            disabled={loading}
            >
            {loading ? <Rings width={25} height={25}/> : "SAVE"}
            </button>
        </div>
    )
}