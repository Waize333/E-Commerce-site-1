import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin}from "react-icons/bs"

export const HeaderTop = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <BsFacebook/>
                    </div>
                    <div>
                        <BsTwitter/>
                    </div>
                    <div>
                        <BsInstagram/>
                    </div>
                    <div>
                        <BsLinkedin/>
                    </div>
                </div>
                <div className="text-gray-500 text-[12px]"><strong>FREE SHIPPING</strong> THIS WEEK ORDER-$100</div>
                <div>
                    <select name="currency" id="currency">
                        <option value ="USD $">USD $</option>
                        <option value ="EUR €">EUR €</option>
                        <option value ="PKR Rs">PKR Rs</option>
                    </select>
                    <select name="language" id="language" >
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
