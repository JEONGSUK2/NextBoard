
'use client';


interface PostList {
    id: number;
    title: string;
    content: string;
    userid: string;
    username: string;
    date: string;
    count: number
}

import Comment from "@/app/components/comment";
import { useCustomSession } from "@/app/sessions";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Edit from "@/app/components/edit";

function Lodaing(){
   return(
    <>
{
  <div className="fixed w-full h-full bg-black/50 top-0 left-0 z-50">
  <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
    <svg
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect
          x="47"
          y="24"
          rx="3"
          ry="6"
          width="6"
          height="12"
          fill={`#ffa500`}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  </div>
</div>
}
    </>
   )  
}

export default function Detail(){
    const {data: session} = useCustomSession();
    const params = useParams();
    const [post, setPost] = useState<PostList[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)



const editPost = async (e: number) =>{
    //alert(e) > 현재 포스트 아이디값

    try{
        const res = await fetch(`/api/edit/`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({id:e})
        })
        if(res.ok){
          const data = await res.json();
          console.log(data.message);
       
        }else{
          const errorData = await res.json();
          console.log(errorData.error);
        }
  
      }catch(error){
        console.log(error);
      }
  }

    return(
        <>
        {isLoading && <Lodaing/>}
            {
                post.length > 0 && (
                    <>
                    
                    <p>작성자 :{post[0]?.title}</p>
                    <p>정보 :{post[0]?.userid}</p>
                    <p>세션 :{session&&session.user.email === post[0]?.userid ? '같음' : '다름'}</p>
                    <p>타이틀:{post[0]?.username}</p>
                    {
                      session ? <Comment id={post && post[0]?.id}/> : <p className="block border p-4 text-center my-5 rounded-md"><Link href="/login">님아 로그인하셈</Link></p>
                    }
                    </>
                ) 
            }
            {
              session && session.user && (
                (post && post[0] && session.user.email === post[0]?.userid) || session.user.level === 10 ) &&
              <>  
                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600 focus:outline-none mr-1" onClick={()=>{editPost(post&&post[0]?.id)}}></button>
              
              </>
            }
        </>
    )
}

// next.js는 서브페이지를 만들경우 새로운 폴더를 생성 후 [입력할 폴더]를 생성후 안에 page.tsx파일을 생성하면 된다.
// 주소창에 post / 작명(이 작명은 id 값이다. 즉 console창에 id = 입력한주소가 뜬다.)

export const POST = async (req: NextRequest) : Promise<NextResponse> =>{
    
    if(req.method === 'POST'){
        return NextResponse.json({message: "메시지"})
    }else{
        return NextResponse.json({error: "에러메시지"})
    }
}

//데이터베이스 구현


